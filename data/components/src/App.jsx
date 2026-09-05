import React, { useState } from 'react';
import { INITIAL_PRODUCTS, CATEGORIES } from './data/products';
import { ProductCard } from './components/ProductCard';

export default function App() {
  const [view, setView] = useState('home');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [user] = useState({ name: 'Boss Man', email: 'boss@cenna.io', purchases: ['1', '3'] });
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const addToCart = (product) => {
    if (product.isFree) {
      alert('Menu này miễn phí! Bạn có thể sử dụng ngay trong trang Tài khoản, boss man.');
      return;
    }
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
    setView('cart');
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const openDetail = (product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'Tất cả' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (view === 'free') return matchesCat && matchesSearch && p.isFree;
    if (view === 'premium') return matchesCat && matchesSearch && !p.isFree;
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div 
              onClick={() => setView('home')} 
              className="cursor-pointer text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500"
            >
              MENU<span className="text-white">VERSE</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <button onClick={() => setView('home')} className={`hover:text-blue-400 transition ${view==='home'?'text-blue-400 font-bold':''}`}>Trang chủ</button>
              <button onClick={() => { setSelectedCategory('Tất cả'); setView('shop'); }} className={`hover:text-blue-400 transition ${view==='shop'?'text-blue-400 font-bold':''}`}>Tất cả Menu</button>
              <button onClick={() => setView('free')} className={`hover:text-blue-400 transition ${view==='free'?'text-blue-400 font-bold':''}`}>Menu Free</button>
              <button onClick={() => setView('premium')} className={`hover:text-purple-400 transition ${view==='premium'?'text-purple-400 font-bold':''}`}>Menu Premium ✨</button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Tìm kiếm mẫu menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-sm rounded-full px-4 py-2 text-slate-200 hidden sm:block focus:outline-none focus:border-blue-500"
            />

            <button onClick={() => setView('cart')} className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-full hover:border-blue-500 transition">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <button onClick={() => setView('account')} className="flex items-center gap-2 p-1.5 pr-3 bg-slate-900 border border-slate-800 rounded-full hover:border-purple-500 transition">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                BM
              </div>
              <span className="text-xs font-semibold text-slate-300 hidden md:inline">{user.name}</span>
            </button>

            <button onClick={() => setIsAdminOpen(!isAdminOpen)} title="Bật giao diện quản trị" className="p-2.5 bg-purple-950/40 border border-purple-800/50 rounded-full text-purple-400 hover:bg-purple-900/50 transition">
              ⚙️
            </button>
          </div>
        </div>
      </header>

      {/* MAIN ROUTER */}
      <main className="pt-28 pb-16 px-4 max-w-7xl mx-auto w-full flex-grow">
        {view === 'home' && (
          <div>
            <section className="relative rounded-3xl p-8 md:p-16 mb-16 overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-black">
              <div className="max-w-2xl relative z-10">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                  Thế giới Menu Số Hiện Đại
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4 mb-6 leading-tight">
                  Nâng tầm đẳng cấp <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Thương hiệu của bạn
                  </span>
                </h1>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Cung cấp hàng trăm mẫu Menu chuyên nghiệp, chuẩn UI/UX từ Free đến Premium dành riêng cho Nhà hàng, Cafe, Cyber Game & Spa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setView('shop')} className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 font-bold rounded-xl shadow-lg shadow-blue-500/25 transition">
                    Xem Tất Cả Menu
                  </button>
                  <button onClick={() => setView('free')} className="px-8 py-3.5 bg-slate-900 border border-slate-700 font-bold rounded-xl transition">
                    Khám Phá Menu Free
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold">Menu Được Yêu Thích</h2>
                  <p className="text-slate-400 text-sm">Bộ sưu tập mẫu giao diện bán chạy nhất tháng này</p>
                </div>
                <button onClick={() => setView('shop')} className="text-blue-400 text-sm font-semibold hover:underline">Xem thêm &rarr;</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map(product => (
                  <ProductCard key={product.id} product={product} onDetail={() => openDetail(product)} onCart={() => addToCart(product)} />
                ))}
              </div>
            </section>
          </div>
        )}

        {(view === 'shop' || view === 'free' || view === 'premium') && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-black capitalize mb-2">
                {view === 'free' ? 'Thư Viện Menu Miễn Phí' : view === 'premium' ? 'Mẫu Menu Premium Cao Cấp' : 'Tất Cả Mẫu Menu'}
              </h1>
              <p className="text-slate-400 text-sm">Lựa chọn giải pháp hiển thị thực đơn chuyên nghiệp cho thương hiệu của bạn.</p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onDetail={() => openDetail(product)} onCart={() => addToCart(product)} />
              ))}
            </div>
          </div>
        )}

        {view === 'detail' && selectedProduct && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-10">
            <button onClick={() => setView('shop')} className="text-slate-400 hover:text-white mb-6 text-sm flex items-center gap-2">
              ← Quay lại
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="rounded-2xl overflow-hidden border border-slate-800">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedProduct.isFree ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {selectedProduct.isFree ? 'FREE' : 'PREMIUM'}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">{selectedProduct.category}</span>
                  </div>

                  <h1 className="text-3xl font-extrabold mb-4">{selectedProduct.name}</h1>
                  <p className="text-slate-400 leading-relaxed mb-6">{selectedProduct.desc}</p>

                  <div className="text-3xl font-black text-blue-400 mb-6">
                    {selectedProduct.isFree ? '0 VNĐ' : `${selectedProduct.price.toLocaleString('vi-VN')} VNĐ`}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProduct.isFree ? (
                    <button className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl transition">
                      Sử Dụng Ngay
                    </button>
                  ) : (
                    <button onClick={() => addToCart(selectedProduct)} className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 font-bold rounded-xl hover:opacity-90 transition">
                      Thêm Vào Giỏ Hàng
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'cart' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-black mb-8">Giỏ Hàng Của Bạn</h1>
            {cart.length === 0 ? (
              <div className="bg-slate-900/40 p-12 text-center rounded-2xl border border-slate-800">
                <p className="text-slate-400 mb-6">Chưa có sản phẩm nào trong giỏ hàng.</p>
                <button onClick={() => setView('shop')} className="px-6 py-3 bg-blue-600 font-bold rounded-xl">Khám phá Menu</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <p className="text-blue-400 font-bold text-sm mt-1">{item.price.toLocaleString('vi-VN')} VNĐ</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-slate-500 hover:text-red-400 p-2">
                        Xóa
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl h-fit">
                  <h3 className="font-bold border-b border-slate-800 pb-4 mb-4">Tóm tắt đơn hàng</h3>
                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Tổng cộng:</span>
                    <span className="text-blue-400">{cart.reduce((a, b) => a + b.price, 0).toLocaleString('vi-VN')} VNĐ</span>
                  </div>
                  <button onClick={() => alert('Cổng thanh toán đang được chuẩn bị, boss man.')} className="w-full py-3.5 bg-blue-600 font-bold rounded-xl hover:bg-blue-500 transition">
                    Tiến Hành Thanh Toán
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {view === 'account' && (
          <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 p-8 rounded-3xl">
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="text-sm text-slate-400 mb-6">{user.email}</p>
            <h2 className="text-lg font-bold mb-4 border-t border-slate-800 pt-6">Menu Đã Sở Hữu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.filter(p => user.purchases.includes(p.id)).map(p => (
                <div key={p.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="font-bold text-sm">{p.name}</h4>
                  <span className="text-xs text-emerald-400">Sẵn sàng tải về</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ADMIN OVERLAY */}
      {isAdminOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 w-full max-w-lg rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-purple-400">Giao Diện Quản Trị (Admin)</h2>
              <button onClick={() => setIsAdminOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-slate-400 mb-4">Các tính năng Admin sẽ được kết nối trực tiếp với backend trong các bước tới.</p>
            <button className="w-full py-3 bg-purple-900/40 border border-purple-800 text-purple-300 font-bold rounded-xl">
              + Thêm Mẫu Menu Mới
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © 2026 MENUVERSE - Built for boss man.
      </footer>
    </div>
  );
}