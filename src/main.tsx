import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={
        {
          token:{
            colorPrimary:'#B55638',
            colorLink:'#B55638'
          }
        }
      }
    >
     
    <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
