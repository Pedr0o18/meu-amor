import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home'
import Love from './pages/Love'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/love' element={<Love />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
