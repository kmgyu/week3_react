export default function Header() {
return (
<header class="navbar bg-base-100 shadow sticky top-0 z-50">
  <div class="container mx-auto px-4 flex justify-between items-center w-full">
    <a href="index.html" class="text-2xl font-bold text-primary">goorm shop</a>
    <div class="flex gap-4">
      <a href="subpage.html" class="btn btn-outline btn-sm">서브 페이지로 이동</a>
      <a href="login.html" class="btn btn-primary btn-sm">로그인</a>
    </div>
  </div>
</header>
    );
}
