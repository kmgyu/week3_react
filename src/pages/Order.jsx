import { useSelector, useDispatch } from 'react-redux';
import { submitOrder } from '@/stores/slices/orderSlice';
import { useNavigate } from 'react-router-dom';
import ProductQtyCard from '../components/order/ProductQtyCard';

function OrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pendingCart = useSelector(state => state.order.pendingCart);
  // const products = useSelector(state => state.products.products);
  const userId = useSelector(state => state.auth.token); // Firebase 인증 UID
  console.log(pendingCart);
  const items = Object.entries(pendingCart).map(([productId, product]) => {
    // const {id, price, quantity, name} = product;
    return {...product};
  });
  console.log(items, 'items fuck');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // TODO : Order API 연동
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitOrder({ userId, items, total }));
    alert('주문이 완료되었습니다!');
    navigate('/');
  };

  
  return (
    <form onSubmit={handleSubmit}>
      {items.map(product => (
      <ProductQtyCard key={product.id} id={product.id} name={product.name} price={product.price}/>
      ))}
      <button type="submit" className="btn btn-primary">주문 완료</button>
    </form>
  );
}

export default OrderPage;