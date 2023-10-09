const Header = () => {
  return (
    <header className="header">
      <div className="l-inner">
        <h1 className="hdg-lv1">
          Tổng kho sale<span className="sub-hdg">Shopee</span>
        </h1>
        <nav className="nav-menu">
          <ul className="lst-menu">
            <li className="active">
              <a className="link-menu" href="/">
                Trang chủ
              </a>
            </li>
            <li>
              <a className="link-menu" href="/">
                Sản phẩm hot
              </a>
            </li>
            <li>
              <a className="link-menu" href="/">
                Mã giảm giá
              </a>
            </li>
            <li>
              <a className="link-menu" href="/">
                Liên hệ quảng cáo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
