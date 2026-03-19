"use client";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        products: 0,
        categories: 0,
        orders: 0
    });

    useEffect(() => {
        // Fetch statistics
        const fetchStats = async () => {
            try {
                const prodRes = await fetch("http://localhost:8080/api/products");
                const catRes = await fetch("http://localhost:8080/api/categories");

                const products = await prodRes.json();
                const categories = await catRes.json();

                setStats({
                    products: products.length || 0,
                    categories: categories.length || 0,
                    orders: 0
                });
            } catch (err) {
                console.error("Backend chưa chạy hoặc lỗi kết nối", err);
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Dashboard</h1>

            <div style={{ display: "flex", gap: "20px" }}>
                {/* Card 1 */}
                <div style={{ flex: 1, backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                    <h3>Tổng Sản Phẩm</h3>
                    <p style={{ fontSize: "32px", fontWeight: "bold", color: "#3498db" }}>{stats.products}</p>
                </div>

                {/* Card 2 */}
                <div style={{ flex: 1, backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                    <h3>Tổng Danh Mục</h3>
                    <p style={{ fontSize: "32px", fontWeight: "bold", color: "#2ecc71" }}>{stats.categories}</p>
                </div>

                {/* Card 3 */}
                <div style={{ flex: 1, backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                    <h3>Đơn Hàng Mới</h3>
                    <p style={{ fontSize: "32px", fontWeight: "bold", color: "#e74c3c" }}>{stats.orders}</p>
                </div>
            </div>
        </div>
    );
}
