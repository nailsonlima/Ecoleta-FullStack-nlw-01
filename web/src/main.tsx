import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePoint from './pages/CreatePoint/index.tsx'
import App from './App.tsx'
const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/create-point',
        element: <CreatePoint />,
      },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)