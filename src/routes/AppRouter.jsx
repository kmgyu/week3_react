// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import SubPage from '@/pages/SubPage';
import Login from '@/pages/Login';
import Order from '@/pages/Order';
import SignUp from '@/pages/SignUp';
import { News } from '@/pages/News';
import EmotionDesignSandbox from '@/pages/DesignSandbox.emotion';
import StyledDesignSandbox from '@/pages/DesignSandbox.styled';
import PostsPage from '@/pages/post/PostsPage';
import PostNewPage from '@/pages/post/PostNewPage';
import PostEditPage from '@/pages/post/PostEditPage';
import PostViewPage from '@/pages/post/PostViewPage';


function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/subpage" element={<SubPage />} />
    <Route path="/order" element={<Order />} />
    <Route path="/news" element={<News />} />
    <Route path="/emotion" element={<EmotionDesignSandbox />} />
    <Route path="/styled" element={<StyledDesignSandbox />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/posts/new" element={<PostNewPage />} />
    <Route path="/posts/:id" element={<PostViewPage />} />
    <Route path="/posts/:id/edit" element={<PostEditPage />} />
    {/* 404 Not Found 페이지 (선택 사항) */}
    <Route path="*" element={
        <div className="flex-1 flex items-center justify-center p-6">
        <div className="card bg-error text-error-content shadow-xl text-center p-8">
            <h2 className="text-4xl font-bold mb-4">⚠️ 404 Not Found</h2>
            <p className="text-lg">페이지를 찾을 수 없습니다.</p>
        </div>
        </div>
    } />
    </Routes>
  );
}

export default AppRouter;
