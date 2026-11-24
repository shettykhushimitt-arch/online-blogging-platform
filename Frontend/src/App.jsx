import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<CreatePost />}></Route>
        <Route path='/about' element={<Feed />}></Route>
      </Routes>
    </div>
  )
}

export default App
