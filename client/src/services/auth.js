import axios from '~/utils/axiosCustomize'

export const postLogin = async (username, password) => {
  const res = await axios.post(`/api/auth/login`, {
    username,
    password,
  })
  return res
}

export const postRegister = async ({ email, username, name, password }) => {
  const res = await axios.post(`/api/auth/register`, {
    email,
    username,
    name,
    password,
  })
  return res
}

export const postLogout = async (refresh_token) => {
  const res = await axios.post(`/api/auth/logout`, {
    refresh_token,
  })
  return res
}

export const postRefreshToken = async (refreshToken) => {
  const res = await axios.post(`/api/auth/refresh`, {
    refreshToken,
  })
  return res
}
