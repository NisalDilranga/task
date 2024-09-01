
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="px-1 py-2 lg:px-12 lg:py-8">
 <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
    
  )
}

export default App
