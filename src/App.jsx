import { useState } from 'react'
// import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';


function App() {

  return (
    <div class="flex flex-col min-h-screen bg-base-100">
      <Header/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App
