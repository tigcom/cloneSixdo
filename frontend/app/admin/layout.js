export default function AdminLayout({ children }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
            {/* Sidebar */}
            <aside style={{ width: "250px", backgroundColor: "#2c3e50", color: "white", padding: "20px" }}>
                <h2 style={{ color: "#ecf0f1", borderBottom: "1px solid #34495e", paddingBottom: "10px" }}>Sixdo Admin</h2>
                <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
                    <li style={{ marginBottom: "15px" }}><a href="/admin" style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-gauge"></i> Dashboard</a></li>
                    <li style={{ marginBottom: "15px" }}><a href="/admin/products" style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-box"></i> Quản lý Sản phẩm</a></li>
                    <li style={{ marginBottom: "15px" }}><a href="/admin/orders" style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-cart-arrow-down"></i> Quản lý Đơn hàng</a></li>
                    <li style={{ marginBottom: "15px" }}><a href="/admin/users" style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-users"></i> Quản lý Người dùng</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, backgroundColor: "#f4f6f9", padding: "20px" }}>
                <header style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>Admin User</span>
                </header>
                {children}
            </main>
        </div>
    );
}
