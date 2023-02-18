import Navbar from '../components/Navbar/Navbar'
import { useContext } from 'react'
import { DarkModeContext } from '~/context/darkModeContext'
import LeftBar from '../components/LeftBar/LeftBar'
import RightBar from '../components/RightBar/RightBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function MainLayout({ children }) {
  const { darkMode } = useContext(DarkModeContext)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>{children}</div>
          <RightBar />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MainLayout
