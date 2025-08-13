import React from 'react';
import '@/styles/style.css';

function ProductCard({ product, checked, onChange }) {
  const { name, price, imageUrl } = product;
  return (
    <label className="card shadow-lg bordered cursor-pointer">
      <input
        type="checkbox"
        name="products"
        value={product.id}
        className="checkbox absolute checkbox-success top-4 left-4"
        checked={checked}
        onChange={onChange}
      />
      <figure>
        <img
          src={imageUrl || 'https://via.placeholder.com/300'}
          alt={name}
          className="object-cover h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>₩{price?.toLocaleString() ?? '0'}</p>
      </div>
    </label>
  );
}

export default ProductCard;