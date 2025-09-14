import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './routes/App'
import './index.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Vite podstawia tu wartość z vite.config.js -> base */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
