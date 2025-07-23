import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '@/stores/slices/orderSlice';

function ProductQtyCard({ productId }) {
  const qty = useSelector(state => state.order.pendingCart[productId] || 1);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-sm" onClick={() => dispatch(decrease(productId))}>-</button>
      <input type="number" readOnly value={qty} className="input input-bordered input-sm w-16 text-center" />
      <button className="btn btn-sm" onClick={() => dispatch(increase(productId))}>+</button>
    </div>
  );
}

export default ProductQtyCard;