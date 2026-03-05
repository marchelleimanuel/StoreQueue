import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import User from './pages/User'
import Login from './pages/Login'
import Admin from './pages/Admin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/home' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
