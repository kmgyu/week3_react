function Login() {
    return (
      <div className="w-full max-w-sm p-6 card bg-base-200 shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
        <form onsubmit="handleLogin(event)" className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">이메일</span>
            </label>
            <input type="email" name="email" className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="label">
              <span className="label-text">비밀번호</span>
            </label>
            <input type="password" name="password" className="input input-bordered w-full" required />
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