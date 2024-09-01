
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className=" px-12 py-8">
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
