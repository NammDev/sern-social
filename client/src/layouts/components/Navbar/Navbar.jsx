import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.scss'
import { AuthContext } from '~/context/authContext'
import { DarkModeContext } from '~/context/darkModeContext'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import { SearchOutlined } from '@mui/icons-material'

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const postApi = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchOutlined />
          <input type='text' placeholder='Search...' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='user'>
          {/* <img src={'/upload/' + currentUser.profilePic} alt='' />
          <span>{currentUser.name}</span> */}
          <img
            src={
              'https://images.unsplash.com/photo-1676521898747-e4fa3b905e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            alt=''
          />
          <span>Dich Phong</span>
          {/* {currentUser ? <span onClick={postApi}>Logout</span> : <Link to='/login'>Login</Link>} */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
