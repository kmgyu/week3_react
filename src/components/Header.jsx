import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../stores/slices/authSlice';
import Button from '@mui/material/Button';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(state => state.auth.token || null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // 홈 페이지로 이동
  };


  if (token) { // logged in
    return (
        <header className="navbar bg-base-100 shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center w-full">
          <Link to="/" className="text-2xl font-bold text-primary">goorm shop</Link>
          <div className="flex gap-4">
            <Button variant="contained" className="btn btn-outline btn-sm">
              <Link to="/order" >장바구니</Link>
            </Button>
            <Button variant="contained" className="btn btn-outline btn-sm">
              <Link to="/subpage">서브 페이지로 이동</Link>
            </Button>
            <Button onClick={handleLogout} className="btn btn-primary btn-sm" variant="contained">
              로그아웃
            </Button>
          </div>
        </div>
      </header>

    );
  } else {
    return (
      <header className="navbar bg-base-100 shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center w-full">
          <Link to="/" className="text-2xl font-bold text-primary">goorm shop</Link>
          <div className="flex gap-4">
            <Link to="/subpage" className="btn btn-outline btn-sm">서브 페이지로 이동</Link>
            <Link to="/login" className="btn btn-primary btn-sm">로그인</Link>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;