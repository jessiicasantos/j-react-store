import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { CartProvider } from './components/Cart/CartContext.tsx'
import { AuthProvider } from './components/Login/AuthContext.tsx'
import { NotificationProvider } from './components/NotificationContext/NotificationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </NotificationProvider>
  </StrictMode>
)
