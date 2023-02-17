import { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '~/context/authContext'
import { useQuery } from '@tanstack/react-query'

const Stories = () => {
  const { currentUser } = useContext(AuthContext)

  //   const { isLoading, error, data } = useQuery(['stories'], () =>
  //     makeRequest.get('/stories').then((res) => {
  //       return res.data
  //     })
  //   )
  const isLoading = false
  const error = ''
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1676191482369-ccfd24567430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      name: 'Hu Truc',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1676486678244-fd3734fb4bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Kieu Phong',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1676549950443-493eb7979b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Mo Dung Phuc',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1676490605000-a42a43a7ccbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80',
      name: 'Saitama',
    },
  ]

  return (
    <div className='stories'>
      <div className='story'>
        {/* <img src={'/upload/' + currentUser.profilePic} alt='' />
        <span>{currentUser.name}</span> */}
        <img
          src={
            'https://images.unsplash.com/photo-1676521898747-e4fa3b905e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          }
          alt=''
        />
        <span>Dich Phong</span>
        <button>+</button>
      </div>
      {error
        ? 'Something went wrong'
        : isLoading
        ? 'loading'
        : data.map((story) => (
            <div className='story' key={story.id}>
              <img src={story.img} alt='' />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  )
}

export default Stories
