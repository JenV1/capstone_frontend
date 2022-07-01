import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import LogIn from './components/LogIn/LogIn';
import MainCarousel from './components/MainCarousel/MainCarousel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<MainCarousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
