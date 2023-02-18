import Post from '../Post/Post'
import './posts.scss'
import { getPosts } from '~/services/post'
import { useQuery } from '@tanstack/react-query'

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(['posts'], () => getPosts(userId))

  return (
    <div className='posts'>
      {error
        ? 'Something went wrong!'
        : isLoading
        ? 'loading'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  )
}

export default Posts
