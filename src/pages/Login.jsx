// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSignUp } from '../utils/api';

function Login() {
  // TODO : login 및 signup 컴포넌트 화
  const token = useSelector(state => state.auth.token || null);
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    // 버튼 누를 때 리프레시 막기
    event.preventDefault();

    console.log(email, name, password);

    dispatch(fetchSignUp({name, email, password}));
  }

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
            <span className="label-text">이름</span>
          </label>
          <input type="name" name="name" value={name} onChange={onNameHandler} className="input input-bordered w-full" required />
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
        <a href="signup.html" className="link link-primary">회원가입</a>
      </p>
    </div>
  );
}

export default Login;