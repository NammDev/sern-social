import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('home')}>
      <div>Stories</div>
      <div>Share</div>
      <div>Posts</div>
      {/* <Stories />
      <Share />
      <Posts /> */}
    </div>
  )
}

export default Home
