import { Navigate } from 'react-router-dom'
import { AuthContext } from '~/context/authContext'
import { useContext } from 'react'

function PrivateRoute({ children }) {
  // const { currentUser } = useContext(AuthContext)
  const currentUser = true
  if (!currentUser) {
    return <Navigate to={`/login`} />
  }
  return children
}

export default PrivateRoute
