import { MainLayout, FragmentLayout } from '~/layouts'
import { Login, Register } from '~/pages'
import { PublicRoute, PrivateRoute } from './proteced'

const routes = [
  { path: '/login', page: Login, layout: FragmentLayout, protected: PublicRoute },
  { path: '/register', page: Register, layout: FragmentLayout, protected: PublicRoute },
]

export default routes
