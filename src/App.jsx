import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import NoPage from './pages/NoPage'

function App() {
  // const check_loggedIn = parseInt(localStorage.getItem('loggedin'));
  // console.log(check_loggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>        
          <Route index path="login" element={<Login />} />  
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* {!check_loggedIn && <Route path="login" element={<Login />} />}
          {!check_loggedIn && <Route path="register" element={<Register />} />}
          {check_loggedIn && <Route path="dashboard" element={<Dashboard />} />} */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
