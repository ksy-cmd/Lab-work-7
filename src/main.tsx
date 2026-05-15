import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'  // ← ЗМІНА: HashRouter замість BrowserRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>  {/* ← ЗМІНА */}
            <App />
        </HashRouter>
    </React.StrictMode>
)
