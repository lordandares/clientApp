/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/HomPage'
import { EventPage } from './pages/Eventpage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  )
}

export default App
