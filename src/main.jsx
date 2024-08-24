import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx/Router.jsx'
import AuthProviders from './componenst/providers/AuthProviders.jsx'
import Layout from './layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </AuthProviders>

  </React.StrictMode>,
)
