import React from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  // 상품 데이터 (실제 프로젝트에서는 API에서 가져옴)
  const productsData = [
    { id: 'prod1', name: '고급 키보드', price: 85000, imageUrl: 'https://via.placeholder.com/400x250/61DAFB/FFFFFF?text=상품+A' },
    { id: 'prod2', name: '무선 마우스', price: 32000, imageUrl: 'https://via.placeholder.com/400x250/FF6347/FFFFFF?text=상품+B' },
    { id: 'prod3', name: '초고속 SSD', price: 120000, imageUrl: 'https://via.placeholder.com/400x250/3CB371/FFFFFF?text=상품+C' },
  ];

  return (
    <div className="container mx-auto p-6">
      <section className="mb-8">
        <h1 className="text-4xl font-extrabold text-center text-base-content mb-8">인기 상품</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-base-200 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-bold mb-4 text-base-content">새로운 소식</h2>
        <p className="text-lg text-gray-600 mb-6">최신 상품과 이벤트를 확인하세요!</p>
        <button className="btn btn-accent btn-lg">더 알아보기</button>
      </section>
    </div>
  );
}

export default HomePage;