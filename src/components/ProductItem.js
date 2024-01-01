import React from "react";
const ProductItem = ({ data }) => {
  return (
    <section className="wrap-sec">
      <h2 className="hdg-lv2">Sản phẩm bán chạy</h2>
      <ul className="lst-item">
        {data &&
          data.map((product, idx) => {
            return <li key={idx}>
              <a
                href={product.url}
                className="link-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="box-item">
                  <p className="wrap-img">
                    <img
                      src={product.image}
                      alt=""
                    />
                  </p>
                  <div className="wrap-info">
                    <div className="wrap">
                      <p className="name">{product?.name}</p>
                      {/* <div className="voucher">
                        <p className="coupon">{product?.coupon}</p>
                        <p className="expire">{product?.expire}</p>
                      </div> */}
                    </div>
                    <div className="sale">
                      <p className="price">
                        {product?.price}
                        <span>đ</span>
                      </p>
                      <p className="sold">
                        Đã bán <span>{product?.sold}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>;
          })}
      </ul>
    </section>

  );
};

export default ProductItem;
