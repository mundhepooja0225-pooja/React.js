import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import layout from './Components/layout'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <route path='' elements={<layout />}>
          <route element={<Home />} />
        </route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
