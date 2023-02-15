import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import Style from '~/components/Style/Style'
import { AuthContextProvider } from './context/authContext'
import { DarkModeContextProvider } from './context/darkModeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <Style>
        <App />
      </Style>
    </AuthContextProvider>
  </DarkModeContextProvider>
)
