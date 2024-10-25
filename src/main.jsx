import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TicketProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* Wrap the App with TicketProvider here */}
      <TicketProvider>
        <App />
      </TicketProvider>
    </StrictMode>
  </BrowserRouter>
)
