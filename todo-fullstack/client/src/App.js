import React from 'react'
import {Route, Routes} from 'react-router'
import Landing from './pages/landing/Landing'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import TodoList from './pages/ToDo/TodoList'
import './App.css'
import 'antd/dist/reset.css';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/to-do-list' element={<TodoList/>}/>

    </Routes>
  )
}

export default App
