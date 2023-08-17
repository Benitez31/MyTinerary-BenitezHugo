import { useState } from 'react';
import Home from './pages/Index/Home';
import Header from './components/Header';
import Main from './pages/Index/Main'


import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Main />
    </>
  )
}

export default App
