import React, { useEffect, useState } from 'react';
import NewsItem from '@/components/news/NewsItem';
import { getNewsArticle } from '@/utils/news-api';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // 사용자 검색어 상태

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getNewsArticle();
        setArticles(response);
      } catch (e) {
        console.error('뉴스 API 오류:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 필터링된 기사들
  const filteredArticles = articles.filter((article) => {
    const keyword = searchTerm.toLowerCase();
    return (
      article.title?.toLowerCase().includes(keyword) ||
      article.description?.toLowerCase().includes(keyword)
    );
  });

  if (loading) {
    return (
      <div className="w-[768px] mx-auto mt-8 px-4">로딩 중...</div>
    );
  }

  return (
    <div className="w-[768px] mx-auto mt-8 px-4 sm:w-full">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={handleChange}
        className="w-full mb-6 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white transition"
      />

      {filteredArticles.length === 0 ? (
        <div className="text-gray-500 dark:text-gray-400">검색 결과가 없습니다.</div>
      ) : (
        filteredArticles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))
      )}
    </div>
  );
}

export default NewsList;
