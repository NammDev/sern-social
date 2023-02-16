import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '~/components/Button/Button'
import { postRegister } from '~/services/auth'
import './register.scss'

function Register() {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  })
  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const postApi = async () => {
    try {
      await postRegister(inputs)
      navigate('/login')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  const validate = ({ email, username, password }) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidateusername = username.length >= 3
    const isValidatePassword = password
    if (!isValidateEmail) {
      setErr('Invalid Email')
    } else if (!isValidateusername) {
      setErr('Invalid Username')
    } else if (!isValidatePassword) {
      setErr('Please enter password')
    }
    return isValidateEmail && isValidateusername && isValidatePassword
  }

  const handleRegister = (e) => {
    e.preventDefault()
    validate(inputs) && postApi()
  }

  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam
            ipsa exercitationem dignissimos, error nam, consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input type='email' placeholder='Email' name='email' onChange={handleChange} />
            <input type='password' placeholder='Password' name='password' onChange={handleChange} />
            <input type='text' placeholder='Name' name='name' onChange={handleChange} />
            {err && err}
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
