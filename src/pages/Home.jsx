import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/utils/api';

function Home() {
  // 상품 데이터 (실제 프로젝트에서는 API에서 가져옴)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
    .then(data => setProducts(data))
    .catch(err =>
      {console.error(err);
        setError('상품 목록을 불러오는데 실패했습니다.');
      }
    )
    .finally(() => setLoading(false));
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <p>불러오는 중...</p>;

  return (
    <div className="container mx-auto p-6">
      <section className="mb-8">
        <h1 className="text-4xl font-extrabold text-center text-base-content mb-8">인기 상품</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
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

export default Home;