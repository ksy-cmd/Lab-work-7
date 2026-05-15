import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- Імпортуємо HashRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* <-- Замінюємо BrowserRouter на HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
