import { useContext, useState } from 'react'
import './comments.scss'
import { AuthContext } from '~/context/authContext'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import moment from 'moment'

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState('')
  const { currentUser } = useContext(AuthContext)

  // const { isLoading, error, data } = useQuery(['comments'], () =>
  //   makeRequest.get('/comments?postId=' + postId).then((res) => {
  //     return res.data
  //   })
  // )

  // const queryClient = useQueryClient()

  const isLoading = false
  const error = ''
  const data = [
    {
      id: 1,
      profilePic:
        'https://images.unsplash.com/photo-1676191482369-ccfd24567430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      name: 'Hu Truc',
      desc: 'Em Không là Duy nhất, Có ai thương em như anh',
      createdAt: '2 days ago',
    },
    {
      id: 2,
      profilePic:
        'https://images.unsplash.com/photo-1676486678244-fd3734fb4bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Kieu Phong',
      desc: 'Nếu em mãi im lặng, cuộc tình ta rẽ ra sao',
      createdAt: '2 days ago',
    },
  ]

  // const mutation = useMutation(
  //   (newComment) => {
  //     return makeRequest.post('/comments', newComment)
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(['comments'])
  //     },
  //   }
  // )

  const handleClick = async (e) => {
    e.preventDefault()
    // mutation.mutate({ desc, postId })
    // setDesc('')
  }

  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePic} alt='' />
        <input
          type='text'
          placeholder='write a comment'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? 'Something went wrong'
        : isLoading
        ? 'loading'
        : data.map((comment) => (
            <div className='comment'>
              <img src={comment.profilePic} alt='' />
              <div className='info'>
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  )
}

export default Comments
