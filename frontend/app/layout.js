import "./globals.css";

export const metadata = {
  title: "Sixdo - Thời trang cao cấp",
  description: "Trang thương mại điện tử Sixdo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <div style={{ display: "flex" }}>
            <a href="/" style={{ textDecoration: "none", width: "20%", paddingTop: "20px" }}>
              <img style={{ width: "70%" }} src="https://sixdo.vn/images/logo.svg" alt="Logo" />
            </a>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "80%" }}>
              <div className="row">
                <div className="navMini">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Tìm kiếm
                </div>
                <div className="navMini">VN</div>
                <div className="navMini">EN</div>
                <div className="navMini" style={{ color: "#939393" }}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className="row1">
                <a href="/danh-sach" className="miniMenu">SẢN PHẨM MỚI</a>
                <a href="/danh-sach" className="miniMenu">SẢN PHẨM GIẢM GIÁ</a>
                <a href="/danh-sach" className="miniMenu">ĐỒNG PHỤC</a>
                <a href="/danh-sach" className="miniMenu">PHỤ KIỆN</a>
                <a href="/danh-sach" className="miniMenu">TÚI XÁCH</a>
                <a href="/danh-sach" className="miniMenu">BỘ SƯU TẬP</a>
                <a href="/tin-tuc" className="miniMenu">TRÌNH DIỄN THỜI TRANG</a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <div className="den1">
          <div className="den2">
            <div><i className="fa-solid fa-clock-rotate-left"></i></div>
            <b>6 NGÀY ĐỔI SẢN PHẨM</b>
            <p>Đổi sản phẩm trong 6 ngày</p>
          </div>
          <div className="den2">
            <div><i className="fa-solid fa-check"></i></div>
            <b>CHÍNH SÁCH MUA SẮM</b>
            <p>Hàng Chính Hãng - Ưu đãi tốt</p>
          </div>
          <div className="den2">
            <div><i className="fa-solid fa-location-dot"></i></div>
            <b>HỆ THỐNG CỬA HÀNG</b>
            <p>Có chi nhánh tại các tỉnh</p>
          </div>
          <div className="den2">
            <div><i className="fa-solid fa-truck"></i></div>
            <b>VẬN CHUYỂN</b>
            <p>Gửi đến khắp nơi toàn quốc</p>
          </div>
        </div>

        <footer style={{ padding: "45px 0" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "150px", fontSize: "16px", margin: "0 130px", paddingBottom: "40px", borderBottomColor: "rgb(227, 221, 187)", borderBottomStyle: "solid", borderBottomWidth: "0.666667px" }}>
            <div className="den3">
              <p style={{ fontWeight: "bold" }}>SẢN PHẨM</p>
              <p><a href="/danh-sach" style={{ textDecoration: "none", color: "black" }}>SẢN PHẨM MỚI</a></p>
              <p><a href="/danh-sach" style={{ textDecoration: "none", color: "black" }}>SẢN PHẨM GIẢM GIÁ</a></p>
              <p><a href="/danh-sach" style={{ textDecoration: "none", color: "black" }}>PHỤ KIỆN</a></p>
              <p><a href="/danh-sach" style={{ textDecoration: "none", color: "black" }}>BỘ SƯU TẬP</a></p>
              <p><a href="/tin-tuc" style={{ textDecoration: "none", color: "black" }}>TRÌNH DIỄN THỜI TRANG</a></p>
            </div>
            <div className="den3">
              <p style={{ fontWeight: "bold" }}>CHÍNH SÁCH MUA SẮM</p>
              <p><a href="#" style={{ textDecoration: "none", color: "black" }}>CÂU CHUYỆN THƯƠNG HIỆU</a></p>
              <p><a href="#" style={{ textDecoration: "none", color: "black" }}>HỆ THỐNG CỬA HÀNG</a></p>
              <p><a href="/tin-tuc" style={{ textDecoration: "none", color: "black" }}>TIN TỨC SIXDO</a></p>
              <p><a href="#" style={{ textDecoration: "none", color: "black" }}>TUYỂN DỤNG</a></p>
              <p><a href="/lien-he" style={{ textDecoration: "none", color: "black" }}>LIÊN HỆ</a></p>
            </div>
            <div className="chaIcon">
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-tiktok"></i>
              </div>
              <div>
                <img style={{ width: "90px" }} src="https://sixdo.vn/images/Thongbaobocongthuong.svg" alt="" />
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: "15px", lineHeight: "40px", color: "#939393" }}>©2020 Sixdo.vn</p>
        </footer>
      </body>
    </html>
  );
}
