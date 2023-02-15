import Navbar from '../components/Navbar'
import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  const darkMode = false
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
