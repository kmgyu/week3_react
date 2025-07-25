// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin } from '@/utils/api';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // TODO : login 및 signup 컴포넌트 화
  const navigate = useNavigate();

  const token = useSelector(state => state.auth.token || null);
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event) => {
    // 버튼 누를 때 리프레시 막기
    event.preventDefault();
    try {
      await dispatch(fetchLogin({ email, password }))
      // const result = await dispatch(fetchLogin({ email, password })).unwrap();
      alert('로그인 성공! ');
    } catch (err) {
      alert('로그인 실패: ' + err);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate])

  return (
    <div className="w-full max-w-sm p-6 card bg-base-200 shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
      <form className="space-y-4" onSubmit={onSubmitHandler}>
        <div>
          <label className="label">
            <span className="label-text">이메일</span>
          </label>
          <input type="email" name="email" value={email} onChange={onEmailHandler} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input type="password" name="password" value={password} onChange={onPasswordHandler} className="input input-bordered w-full" required />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">로그인</button>
        </div>
      </form>
      <p className="mt-4 text-sm text-center">
        계정이 없으신가요?
        <Link to="/signup" className="link link-primary">회원가입</Link>
      </p>
    </div>
  );
}

export default Login;