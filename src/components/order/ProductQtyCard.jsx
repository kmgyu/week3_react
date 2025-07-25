import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '@/stores/slices/orderSlice';

function ProductQtyCard({ id, name, price }) {
  const qty = useSelector(state => state.order.pendingCart[id].quantity || 1);
  const dispatch = useDispatch();

  return (
<div className="card bg-base-200 shadow p-4">
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{price}</p>
    </div>
    <div className="flex items-center gap-2">
      <button type="button" className="btn btn-sm" onClick={() => dispatch(decrease({id, name, price}))}>-</button>
      <input type="number" value={qty} min="1" readOnly className="input input-bordered input-sm w-16 text-center" />
      <button type="button" className="btn btn-sm" onClick={() => dispatch(increase({id, name, price}))}>+</button>
    </div>
  </div>
</div>
  );
}

export default ProductQtyCard;