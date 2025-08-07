import React, { useEffect, useState } from 'react';
import NewsItem from '@/components/news/NewsItem';
import { getNewsArticle } from '../../utils/news-api';

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

function NewsList () {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const newsData = async() => {
            try {
                const response = await getNewsArticle();
                setArticles(response);
                console.log(articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        newsData();
    }, []);

        // 대기 중일 때
    if(loading) {
        return (
        <div className="box-border pb-12 w-[768px] mx-auto mt-8 px-0 sm:w-full sm:px-4">
            대기 중...
        </div>);
    }
    // 아직 articles 값이 설정되지 않았을 때
    if(!articles) {
        return null;
    }

    return (
        <div className="box-border pb-12 w-[768px] mx-auto mt-8 px-0 sm:w-full sm:px-4">
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
