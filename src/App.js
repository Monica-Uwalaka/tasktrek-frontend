import React from 'react';
import './App.css';
// import { HomePage } from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router";
// import { SignInForm } from './components/SignInForm';
// import { SignUpForm } from './components/SignUpForm';
import Dashboard from './components/Dashboard';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
