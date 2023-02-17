import axios from '~/utils/axiosCustomize'

export const getPosts = async (userId) => {
  const res = await axios.get(`/api/posts?userId=${userId}`)
  return res
}

export const deletePost = async (id) => {
  const res = await axios.delete(`/api/posts/${id}`)
  return res
}

export const createPost = async (title, desc, cat, img, date) => {
  const res = await axios.post(`/api/posts`, { title, desc, cat, img, date })
  return res
}
