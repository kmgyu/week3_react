import React from 'react';
import { Link } from 'react-router-dom';

function SubPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-base-200 shadow-xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-secondary mb-6">🚀 서브 페이지입니다!</h1>
        <p className="text-lg text-base-content mb-8 leading-relaxed">
          이 페이지는 Goorm Shop의 서브 콘텐츠를 제공합니다. 메인 페이지와 별도로 구성되어 있으며,
          여기서 더 자세한 정보나 특정 기능을 탐색할 수 있습니다.
          <br />
          아래 버튼을 클릭하여 다시 메인 페이지로 돌아갈 수 있습니다.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-lg btn-primary">메인 페이지로 돌아가기</Link>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary">Google 방문하기</a>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow mt-8 w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">다운로드</div>
            <div className="stat-value text-primary">2.6M</div>
            <div className="stat-desc">21% 더 많음</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">페이지 뷰</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% 더 많음</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="아바타" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">과제 완료</div>
            <div className="stat-desc text-secondary">31% 진행률</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubPage;