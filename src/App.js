import './App.css';
import { HomePage } from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
           */}

        </Routes>
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
