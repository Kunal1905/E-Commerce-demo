import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ShopContextProvider from "./components/Context/ShopContext"   // 👈 import provider

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>   {/* 👈 wrap here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
)
