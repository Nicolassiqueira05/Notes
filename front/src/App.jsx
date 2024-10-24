import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/pages/Login/Login.jsx"
import Register from "./components/pages/Register/Register.jsx"
import Recover from "./components/pages/Recover/Recover.jsx"
import Main from './components/pages/Main/Main.jsx';
import { useState } from 'react';
import "./App.css"


function App() {
  const [value, setValue] = useState('')
  function getValue(value) {
    setValue(value)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
