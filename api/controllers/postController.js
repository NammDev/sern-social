import {
  getAllPosts,
  getAllPostsById,
  deletePostById,
  addPostService,
} from '../services/postService.js'

export const getPosts = async (req, res) => {
  try {
    const data =
      req.query.userId !== 'undefined'
        ? await getAllPostsById(req.query.userId)
        : await getAllPosts(req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const addPost = async (req, res) => {
  try {
    const data = await addPostService(req.body, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const data = await deletePostById(req.params.id, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
