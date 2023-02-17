import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '~/context/authContext'
import './login.scss'

function Login() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const { login } = useContext(AuthContext)

  const postApi = async () => {
    try {
      await login(inputs)
      navigate('/')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  // const validate = ({ email, password }) => {
  //   const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  //   const isValidatePassword = password
  //   if (!isValidateEmail) setErr('Failed Email')
  //   if (!isValidatePassword) setErr('Please input your Password')
  //   return isValidateEmail && isValidatePassword
  // }

  const handleLogin = (e) => {
    e.preventDefault()
    postApi()
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam
            ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input
              type='password'
              autoComplete='off'
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
