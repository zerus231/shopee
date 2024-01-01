import { Pagination, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Banner from "../../common/image/banner/Banner";
import ProductItem from "../../components/ProductItem";
import axios from "axios";
import fileCSV from "../../assets/shopee.csv"
import { usePapaParse } from 'react-papaparse';
const HomePage = () => {
  const { readString } = usePapaParse();
  const [listItems, setListItems] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const headers = {
    "Content-Type": "application/json",
    "Authorization": process.env.REACT_APP_AFFILIATE_TOKEN
  };
  const handlePaging = (page, pageSize) => {
    setCurrentIndex(page);
    setIsLoading(true);
    const urls = []
    const dataSearch = listItems.splice(page - 1, pageSize)
    dataSearch.map(produce => {
      return !produce[2].includes('url') && urls.push(produce[2])
    })
    createShorten(urls)
      .then((response) => {
        let listProduct = []
        listItems.splice(page - 1, pageSize).map((v, idx) => {
          let obj = {
            sku: v[0],
            name: v[1],
            price: v[4],
            image: v[5],
            url: response.data.data.success_link[idx]?.short_link,
            sold: Math.round(Math.random() * 100)
          }
          return listProduct.push(obj)
        })
        setDataShow(listProduct);
        setIsLoading(false);
      });
  };
  const createShorten = (urls) => {
    // create tracking link
    const data = {
      campaign_id: "4751584435713464237",
      urls: urls,
      "utm_source": "test_source",
      "utm_medium": "test_medium",
      "utm_campaign": "test_campaign",
      "utm_content": "test_content",
      "sub1": "test_sub1",
      "sub2": "test_sub2",
      "sub3": "test_sub3",
      "tracking_domain": "go.isclix.com",
      "short_link": "https://shorten.asia",
      "create_shorten": true,
      "url_enc": false,
    };
    return axios
      .post("https://api.accesstrade.vn/v1/product_link/create", data, {
        headers,
      })
  }
  const handleSearch = (e) => {
    setIsLoading(true)
    if (e.target.value) {
      const data = listItems.filter(product => product[1] && product[1].includes(e.target.value))
      setListItems(data)
      convertLink(data)
      setIsLoading(false)
    } else {
      loadDataFromFile()
      setIsLoading(false)
    }
  }
  const convertLink = (data) => {
    const urls = []
    const dataSearch = data.splice(0, 20)
    dataSearch.map(produce => {
      return !produce[2].includes('url') && urls.push(produce[2])
    })
    createShorten(urls)
      .then((response) => {
        let listProduct = []
        dataSearch.map((v, idx) => {
          let obj = {
            sku: v[0],
            name: v[1],
            price: v[4],
            image: v[5],
            url: response.data.data.success_link[idx]?.short_link,
            sold: Math.round(Math.random() * 100)
          }
          return listProduct.push(obj)
        })
        setDataShow(listProduct);
      });
  }
  const loadDataFromFile = () => {
    readString(fileCSV, {
      complete: (results, file) => {
        setIsLoading(false);
        setListItems(results.data);
        convertLink(results.data)
      },
      download: true,
      error: (error, file) => {
        console.log('error while parsing:', error, file);
      },
    });
  }
  useEffect(() => {
    loadDataFromFile()
  }, [readString])
  return (
    <>
      <main className="l-main">
        <div className="l-inner">
          <div className="wrap-container">
            <ul className="lst-input">
              <li>
                <div className="wrap-input">
                  <input
                    type="text"
                    className="input-txt"
                    placeholder="Nhập hoặc dán tên sản phẩm ..."
                    onChange={handleSearch}
                  />
                  <button className="btn-search" type="submit"></button>
                </div>
              </li>
            </ul>
            <Banner />
            {isLoading ? <Spin style={{display: 'flex', justifyContent: 'center', marginTop: 150, widthL: 200}} size="large" /> : (dataShow && dataShow.length > 0 && (
              <>
                <ProductItem data={dataShow} />
                <div className="wrap-paging">
                  <Pagination
                    current={currentIndex}
                    total={listItems.length}
                    onChange={handlePaging}
                    defaultPageSize={20}
                    pageSizeOptions={[20]}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
