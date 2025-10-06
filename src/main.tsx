import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router'
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <CartProvider>

      <RouterProvider router={router} />
      
    </CartProvider>

  </StrictMode>,
)
