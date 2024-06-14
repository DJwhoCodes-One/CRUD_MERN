import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import { Routes, Route } from 'react-router-dom'
import Edit from './components/Edit.jsx'
import CardDetails from './components/CardDetails.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/details/:id' element={<CardDetails />} />
      </Routes>
    </>
  )
}

export default App
