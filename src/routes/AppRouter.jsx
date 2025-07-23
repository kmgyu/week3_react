// src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SubPage from '@/pages/SubPage';
import Login from '@/pages/Login';

function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/subpage" element={<SubPage />} />
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
