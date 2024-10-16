import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import { site_name } from './Functions/Constants';

function App() {



  return (
    <Router basename={site_name}>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;