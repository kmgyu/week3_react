import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);
  const navigate = useNavigate();

  const increaseQty1 = () => setQty1(prev => prev + 1);
  const decreaseQty1 = () => setQty1(prev => (prev > 1 ? prev - 1 : 1));

  const increaseQty2 = () => setQty2(prev => prev + 1);
  const decreaseQty2 = () => setQty2(prev => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('주문이 완료되었습니다!');
    navigate('/');
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">주문하기</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">

          {/* 상품 1 */}
          <div className="card bg-base-200 shadow p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">상품 1</h2>
                <p className="text-sm text-gray-500">₩10,000</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="btn btn-sm" onClick={decreaseQty1}>-</button>
                <input
                  type="number"
                  value={qty1}
                  readOnly
                  className="input input-bordered input-sm w-16 text-center"
                />
                <button type="button" className="btn btn-sm" onClick={increaseQty1}>+</button>
              </div>
            </div>
          </div>

          {/* 상품 2 */}
          <div className="card bg-base-200 shadow p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">상품 2</h2>
                <p className="text-sm text-gray-500">₩12,000</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="btn btn-sm" onClick={decreaseQty2}>-</button>
                <input
                  type="number"
                  value={qty2}
                  readOnly
                  className="input input-bordered input-sm w-16 text-center"
                />
                <button type="button" className="btn btn-sm" onClick={increaseQty2}>+</button>
              </div>
            </div>
          </div>

          {/* 주문 버튼 */}
          <div className="text-right">
            <button type="submit" className="btn btn-primary">주문 완료</button>
          </div>

        </div>
      </form>
    </section>
  );
}

export default OrderPage;
