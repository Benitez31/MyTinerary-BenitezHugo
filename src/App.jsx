import { useState } from 'react';
import Home from './pages/Index/Home';
import Layout from './layouts/Layout';


import './App.css'

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App
