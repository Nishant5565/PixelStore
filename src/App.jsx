import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';

function App() {



  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;