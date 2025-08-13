import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-base-100">
      <BrowserRouter>
        <Header/>
        {/* 가운데 정렬 영역 */}
        <main className="flex-grow flex justify-center items-start p-4">
            <AppRouter />
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
    </>

  );
}

export default App
