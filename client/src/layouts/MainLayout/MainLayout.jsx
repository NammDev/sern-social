import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { DarkModeContext } from '~/context/darkModeContext'

function MainLayout({ children }) {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div>Left Bar</div>
        <div style={{ flex: 6 }}>{children}</div>
        <div>Right Bar</div>
      </div>
    </div>
  )
}

export default MainLayout
