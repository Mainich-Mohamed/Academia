
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/library' element="" />
        <Route path='/settings' element="" />
      </Routes>
    </>
  )
}

export default App
