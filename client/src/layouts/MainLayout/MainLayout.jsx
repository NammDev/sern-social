import Navbar from '../components/Navbar/Navbar'
import { useContext } from 'react'
import { DarkModeContext } from '~/context/darkModeContext'
import LeftBar from '../components/LeftBar/LeftBar'
import RightBar from '../components/RightBar/RightBar'

function MainLayout({ children }) {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <div style={{ flex: 6 }}>{children}</div>
        <RightBar />
      </div>
    </div>
  )
}

export default MainLayout
