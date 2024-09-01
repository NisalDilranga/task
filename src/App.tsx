
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className=" p-9">
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
