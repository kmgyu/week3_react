import React from 'react';

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="flex mt-12 first:mt-0 rounded-2xl shadow-sm p-4 bg-gray-50 dark:bg-gray-800 transition-colors">
      {urlToImage && (
        <div className="mr-4 flex-shrink-0">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={urlToImage}
              alt="thumbnail"
              className="block w-[160px] h-[100px] object-cover rounded-lg"
            />
          </a>
        </div>
      )}
      <div className="flex flex-col justify-start">
        <h2 className="m-0 text-lg font-semibold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline"
          >
            {title}
          </a>
        </h2>
        <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-gray-300 whitespace-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default NewsItem;
