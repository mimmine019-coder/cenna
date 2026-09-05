import React from 'react';

export function ProductCard({ product, onDetail, onCart }) {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-500/40 hover:-translate-y-1 transition duration-300">
      <div>
        <div className="relative h-48 overflow-hidden group cursor-pointer" onClick={onDetail}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-black tracking-wider ${
              product.isFree ? 'bg-emerald-500/90 text-white' : 'bg-purple-600/90 text-white'
            }`}>
              {product.isFree ? 'FREE' : 'PREMIUM'}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="text-xs font-semibold text-slate-400 uppercase mb-1">{product.category}</div>
          <h3 className="font-bold text-base text-slate-100 mb-2 hover:text-blue-400 cursor-pointer transition line-clamp-1" onClick={onDetail}>
            {product.name}
          </h3>
          <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">{product.desc}</p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/40 mt-auto">
        <div className="font-bold text-blue-400 text-sm">
          {product.isFree ? '0 VNĐ' : `${product.price.toLocaleString('vi-VN')} VNĐ`}
        </div>
        <div className="flex gap-2 pt-3">
          <button onClick={onDetail} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg transition">
            Chi tiết
          </button>
          {!product.isFree && (
            <button onClick={onCart} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white rounded-lg transition">
              Thêm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}