import express from 'express'
import { addPost, deletePost, getPosts } from '../controllers/postController.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.get('/', authorize, getPosts)
router.post('/', authorize, addPost)
router.delete('/:id', authorize, deletePost)

export default router
