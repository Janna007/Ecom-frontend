import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  
  </StrictMode>,
)
