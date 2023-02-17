import './profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Posts from '~/components/Posts/Posts'
import Update from '~/components/Update/Update'
import { useState, useContext } from 'react'
import { AuthContext } from '~/context/authContext'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split('/')[2])

  // const { isLoading, error, data } = useQuery(['user'], () =>
  //   makeRequest.get('/users/find/' + userId).then((res) => {
  //     return res.data
  //   })
  // )
  const isLoading = false
  const rIsLoading = false
  const data = {
    coverPic:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2103&q=80',
    profilePic:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    name: 'Hu Truc',
    city: 'Bac Kinh',
    website: 'https://unsplash.com/',
  }

  const relationshipData = [1, 2]

  // const { isLoading: rIsLoading, data: relationshipData } = useQuery(['relationship'], () =>
  //   makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
  //     return res.data
  //   })
  // )

  // const queryClient = useQueryClient()

  // const mutation = useMutation(
  //   (following) => {
  //     if (following) return makeRequest.delete('/relationships?userId=' + userId)
  //     return makeRequest.post('/relationships', { userId })
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(['relationship'])
  //     },
  //   }
  // )

  const handleFollow = () => {
    // mutation.mutate(relationshipData.includes(currentUser.id))
  }

  return (
    <div className='profile'>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className='images'>
            <img src={data.coverPic} alt='' className='cover' />
            <img src={data.profilePic} alt='' className='profilePic' />
          </div>
          <div className='profileContainer'>
            <div className='uInfo'>
              <div className='left'>
                <a href='http://facebook.com'>
                  <FacebookTwoToneIcon fontSize='large' />
                </a>
                <a href='http://facebook.com'>
                  <InstagramIcon fontSize='large' />
                </a>
                <a href='http://facebook.com'>
                  <TwitterIcon fontSize='large' />
                </a>
                <a href='http://facebook.com'>
                  <LinkedInIcon fontSize='large' />
                </a>
              </div>
              <div className='center'>
                <span>{data.name}</span>
                <div className='info'>
                  <div className='item'>
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className='item'>
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  'loading'
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id) ? 'Following' : 'Follow'}
                  </button>
                )}
              </div>
              <div className='right'>
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}

export default Profile
