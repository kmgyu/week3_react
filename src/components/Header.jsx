import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar bg-base-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <Link to="/" className="text-2xl font-bold text-primary">goorm shop</Link>
        <div className="flex gap-4">
          <Link to="/subpage" className="btn btn-outline btn-sm">서브 페이지로 이동</Link>
          {/* 로그인/회원가입 링크는 추후 필요시 추가하거나 동적 처리 */}
          <Link to="/login" className="btn btn-primary btn-sm">로그인</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;