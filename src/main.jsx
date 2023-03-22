import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import { GlobalStyles } from './styles/global'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
)
