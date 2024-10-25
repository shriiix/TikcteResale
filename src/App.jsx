import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/Dashboard'
import CreateTicket from './components/CreateTicket'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="flex-1 max-sm:w-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create-ticket" element={<CreateTicket />} />
        </Routes>
      </div>
    </>
  )
}

export default App
