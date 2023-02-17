import bcrypt from 'bcryptjs'
import { getUserByUsername, getUserByEmailName, createNewUser } from '../services/authService.js'
import { jwtGeneratorAccess, jwtGeneratorRefresh } from '../utils/jwtGenerator.js'
import { catchError } from '../middlewares/authorize.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

let refreshTokens = []

export const register = async (req, res) => {
  try {
    // 1. Destructure the req.body (name, email, password)
    const { username, email, password, name } = req.body

    // 2. Check if user exist (if false throw error)
    const user = await getUserByEmailName(email, username)
    if (user.length) return res.status(404).json('Email or Username is already exist!')

    // 3. Bcrypt the user password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // 4. Insert the new user in side our database
    await createNewUser(username, email, name, hash)

    // 5. Send respond
    return res.status(200).json('User has been created.')
  } catch (error) {
    res.status(500).json(error)
  }
}

export const login = async (req, res) => {
  try {
    // 1. Destructure the req.body (email, password)
    const { username, password } = req.body

    // 2. Check if user exist (if false throw error)
    const user = await getUserByUsername(username)
    if (user.length === 0) return res.status(404).json('Username is notfound!')

    // 3. Check if input password is same as database password
    const validPassword = await bcrypt.compare(password, user[0].password)
    if (!validPassword) return res.status(401).json('Password is incorrect')

    // 4. Give them jwt token
    const accessToken = jwtGeneratorAccess(user[0].id)
    const refreshToken = jwtGeneratorRefresh(user[0].id)

    // 4.1. Add refresh token to array
    refreshTokens.push(refreshToken)

    // 5. Send respond
    const { id, name, img, coverPic, profilePic, city, website } = user[0]
    res.json({
      accessToken,
      refreshToken,
      id,
      username: user[0].username,
      name,
      email: user[0].email,
      img,
      coverPic,
      profilePic,
      city,
      website,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const logout = (req, res) => {
  const refreshToken = req.body.refreshToken
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
  res.status(200).json('You logged out successfully.')
}

export const refresh = (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.refreshToken

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json('You are not authenticated!')

  // Check array token have token which user send or not
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json('Refresh token is not valid!')

  // verify token
  try {
    const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH)
    // When refresh: Remove old refreshToken in array, add a new one -> Send to client side to handle
    // refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
    // const newRefreshToken = generateRefreshToken(user)
    // refreshTokens.push(newRefreshToken)
    const accessToken = jwtGeneratorAccess(decoded.id)
    res.status(200).json({
      accessToken,
    })
  } catch (error) {
    catchError(err, res)
  }
}
