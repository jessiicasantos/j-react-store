import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { CartProvider } from './components/Cart/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
  </StrictMode>
)
