export default function App() {
  const products = [
    {
      id: 1,
      name: "Kim cương Gói 100",
      price: "99.000đ",
      icon: "💎"
    },
    {
      id: 2,
      name: "Kim cương Gói 530",
      price: "399.000đ",
      icon: "💎"
    },
    {
      id: 3,
      name: "Dịch vụ Game",
      price: "199.000đ",
      icon: "🎮"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#050816,#0b1120,#071a35)",
        color: "white",
        fontFamily: "Arial"
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,.1)"
        }}
      >
        <h1
          style={{
            color: "#00E5FF",
            textShadow: "0 0 20px #00E5FF"
          }}
        >
          CENNA SHOP
        </h1>

        <div style={{ display: "flex", gap: 20 }}>
          <span>Trang chủ</span>
          <span>Cửa hàng</span>
          <span>Liên hệ</span>
        </div>
      </header>

      {/* Banner */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px"
        }}
      >
        <h2
          style={{
            fontSize: 48,
            marginBottom: 15
          }}
        >
          🚀 SHOP GAME UY TÍN
        </h2>

        <p style={{ opacity: 0.8 }}>
          Mua sản phẩm số nhanh chóng • Giao tự động
        </p>

        <button
          style={{
            marginTop: 25,
            background: "#00C8FF",
            color: "#000",
            border: "none",
            padding: "15px 40px",
            borderRadius: 15,
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 25px #00C8FF"
          }}
        >
          Khám phá ngay
        </button>
      </div>

      {/* Product */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: 25,
          padding: 40
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(15px)",
              borderRadius: 20,
              padding: 25,
              border: "1px solid rgba(0,229,255,.3)",
              boxShadow: "0 0 25px rgba(0,229,255,.15)"
            }}
          >
            <div
              style={{
                fontSize: 60,
                textAlign: "center"
              }}
            >
              {item.icon}
            </div>

            <h2 style={{ textAlign: "center" }}>
              {item.name}
            </h2>

            <h3
              style={{
                color: "#00E5FF",
                textAlign: "center"
              }}
            >
              {item.price}
            </h3>

            <button
              style={{
                width: "100%",
                marginTop: 20,
                padding: 15,
                border: "none",
                borderRadius: 12,
                background:
                  "linear-gradient(90deg,#00E5FF,#007BFF)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Mua ngay
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: 25,
          opacity: 0.6
        }}
      >
        © 2026 CENNA SHOP
      </footer>
    </div>
  );
}