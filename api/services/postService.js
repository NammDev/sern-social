import db from '../config/db.js'
import moment from 'moment'

export const getAllPosts = (id) =>
  new Promise((resolve, reject) => {
    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    ORDER BY p.createdAt DESC`
    db.query(q, [id, id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })

export const getAllPostsById = (id) =>
  new Promise((resolve, reject) => {
    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
    db.query(q, [id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })

export const addPostService = ({ desc, img }, uid) =>
  new Promise((resolve, reject) => {
    const q = 'INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?)'
    const values = [desc, img, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'), uid]
    db.query(q, [values], (err, data) => {
      if (err) {
        reject(err)
      }
      resolve('Post has been created.')
    })
  })

export const deletePostById = (pid, uid) =>
  new Promise((resolve, reject) => {
    const q = 'DELETE FROM post WHERE `id` = ? AND `uid` = ?'
    db.query(q, [pid, uid], (err, data) => {
      if (err) {
        reject(err)
      }
      resolve('Post has been deleted!')
    })
  })
