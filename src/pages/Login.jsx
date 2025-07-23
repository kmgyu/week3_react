function Login() {
    return (
      <div class="w-full max-w-sm p-6 card bg-base-200 shadow">
        <h1 class="text-2xl font-bold mb-6 text-center">로그인</h1>
        <form onsubmit="handleLogin(event)" class="space-y-4">
          <div>
            <label class="label">
              <span class="label-text">이메일</span>
            </label>
            <input type="email" name="email" class="input input-bordered w-full" required />
          </div>
          <div>
            <label class="label">
              <span class="label-text">비밀번호</span>
            </label>
            <input type="password" name="password" class="input input-bordered w-full" required />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary w-full">로그인</button>
          </div>
        </form>
        <p class="mt-4 text-sm text-center">
          계정이 없으신가요?
          <a href="signup.html" class="link link-primary">회원가입</a>
        </p>
      </div>
    );
}

export default Login;