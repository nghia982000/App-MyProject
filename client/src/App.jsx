import './App.css';
import 'antd/dist/antd.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<Layout />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
