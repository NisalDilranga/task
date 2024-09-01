
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className=" lg:px-12 lg:py-8 px-1 py-2">
 <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
