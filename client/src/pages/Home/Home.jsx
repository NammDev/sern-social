import Stories from '~/components/Stories/Stories'
import './Home.scss'
import Share from '~/components/Share/Share'
import Posts from '~/components/Posts/Posts'

function Home() {
  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home
