import React from 'react';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    // <label> 태그 대신 <div>를 사용하고, 체크박스 기능은 추후 구현
    <div className="card shadow-lg bg-base-200">
      <figure>
        <img src={imageUrl} alt={name} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>₩{price.toLocaleString()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">장바구니</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;