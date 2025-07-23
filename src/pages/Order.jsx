import { useSelector, useDispatch } from 'react-redux';
import { submitOrder } from '@/stores/slices/orderSlice';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pendingCart = useSelector(state => state.order.pendingCart);
  const products = useSelector(state => state.products.products);
  const userId = useSelector(state => state.auth.user?.uid); // Firebase 인증 UID

  const items = Object.entries(pendingCart).map(([productId, quantity]) => {
    const product = products[productId];
    return {
      productId,
      name: product.name,
      price: product.price,
      quantity,
    };
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitOrder({ userId, items, total }));
    alert('주문이 완료되었습니다!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...상품 출력 및 수량 카드 생략 */}
      <button type="submit" className="btn btn-primary">주문 완료</button>
    </form>
  );
}

export default OrderPage;