"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch API if backend is running, otherwise use fallback data
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setFallbackData();
        }
      })
      .catch((err) => {
        setFallbackData();
      });
  }, []);

  const setFallbackData = () => {
    setProducts([
      { id: 1, name: "White Raw Blouse", image: "https://sixdo.vn/images/products/2026/large/DU__9941.jpg", price: 1037000, oldPrice: 1296000 },
      { id: 2, name: "Black Woven Flared Skirt", image: "https://sixdo.vn/images/products/2026/large/_1771918150DU__9813 copy_1.jpg", price: 1357000, oldPrice: 1696000 },
      { id: 3, name: "Black Ruffle Sleeves Cotton Tshirt", image: "https://sixdo.vn/images/products/2026/large/_1771913502DU__9756_1.jpg", price: 797000, oldPrice: 996000 },
      { id: 4, name: "Black Woven Baggy Pants", image: "https://sixdo.vn/images/products/2026/large/DU__9660.jpg", price: 1117000, oldPrice: 1396000 }
    ]);
  };

  return (
    <>
      <header>
        <div>
          <img style={{ width: "100%" }} src="https://sixdo.vn/images/banners/resized/web-muse-1771909285.webp" alt="Banner" />
        </div>
      </header>
      <main>
        <div>
          <div className="arival">
            <p style={{ display: "block", textAlign: "center", textDecoration: "none", color: "black", fontSize: "30px", marginTop: "40px" }}>
              NEW ARRIVAL
            </p>
          </div>
          <div className="listproduct1">
            {products.map((p) => (
              <div key={p.id} className="product">
                <img src={p.image} alt={p.name} />
                <div style={{ display: "flex", gap: "20px", marginTop: "5px", marginBottom: "10px" }}>
                  <b style={{ fontFamily: "'TCCC-Black', Arial", fontSize: "12px" }}>
                    {p.price.toLocaleString("vi-VN")}đ
                  </b>
                  {p.oldPrice && (
                    <small style={{ fontSize: "12px", color: "rgb(191, 3, 3)", textDecoration: "line-through" }}>
                      {p.oldPrice.toLocaleString("vi-VN")}đ
                    </small>
                  )}
                </div>
                <a className="link1" href={`/chi-tiet/${p.id}`} style={{ fontSize: "12px" }}>
                  {p.name}
                </a>
              </div>
            ))}

            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <a href="/danh-sach" style={{ textDecoration: "none", color: "black" }}>
                <button className="migh1">XEM THÊM</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p style={{ fontWeight: "lighter", textAlign: "center", color: "black", fontSize: "40px" }}>Instagram</p>
            <p style={{ textAlign: "center", color: "rgb(109, 109, 109)", fontSize: "20px" }}>@sixdo.vn</p>
          </div>
          <div className="listproduct2">
            {["1-1-1746265646.webp", "2-1746264570.webp", "3-1746264580.webp", "b2-1746263619.webp", "b1-1746263630.webp", "b3-1746263639.webp", "a-1746408242.webp", "b-1746408249.webp", "c-1746408256.webp"].map((imgName, i) => (
              <div key={i} className="product1">
                <img src={`https://sixdo.vn/images/banners/mresized/${imgName}`} alt={`Instagram ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
