import db from '../config/db.js'

export const getUserByUsername = (username) =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM users WHERE username = ?'
    db.query(q, username, (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

export const getUserByEmailName = (email, username) =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?'
    db.query(q, [email, username], (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

export const createNewUser = (username, email, name, hash) =>
  new Promise((resolve, reject) => {
    const q = `INSERT INTO users SET ?`
    const data = {
      username,
      email,
      name,
      password: hash,
    }
    db.query(q, data, (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

export const getAllUsers = () =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM users'
    db.query(q, (err, rows) => {
      if (err) {
        return reject(err)
      }
      resolve(rows)
    })
  })
