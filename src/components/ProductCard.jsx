export default function ProductCard() {
  return (
<main class="flex-1 container mx-auto p-6">
  <section class="mb-8">
    <h1 class="text-4xl font-extrabold text-center text-base-content mb-8">인기 상품</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="card shadow-lg bg-base-200">
        <figure>
          <img src="https://via.placeholder.com/400x250/61DAFB/FFFFFF?text=상품+A" alt="상품 A" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">고급 키보드</h2>
          <p>최고의 타이핑 경험을 선사합니다.</p>
          <div class="card-actions justify-end">
            <span class="text-xl font-bold">₩ 85,000</span>
            <button class="btn btn-primary">장바구니</button>
          </div>
        </div>
      </div>

      <div class="card shadow-lg bg-base-200">
        <figure>
          <img src="https://via.placeholder.com/400x250/FF6347/FFFFFF?text=상품+B" alt="상품 B" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">무선 마우스</h2>
          <p>정확하고 편안한 작업 환경.</p>
          <div class="card-actions justify-end">
            <span class="text-xl font-bold">₩ 32,000</span>
            <button class="btn btn-primary">장바구니</button>
          </div>
        </div>
      </div>

      <div class="card shadow-lg bg-base-200">
        <figure>
          <img src="https://via.placeholder.com/400x250/3CB371/FFFFFF?text=상품+C" alt="상품 C" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">초고속 SSD</h2>
          <p>데이터 전송 속도의 혁명.</p>
          <div class="card-actions justify-end">
            <span class="text-xl font-bold">₩ 120,000</span>
            <button class="btn btn-primary">장바구니</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-center p-8 bg-base-200 rounded-lg shadow-md mt-12">
    <h2 class="text-3xl font-bold mb-4 text-base-content">새로운 소식</h2>
    <p class="text-lg text-gray-600 mb-6">최신 상품과 이벤트를 확인하세요!</p>
    <button class="btn btn-accent btn-lg">더 알아보기</button>
  </section>
</main>
  );
}

