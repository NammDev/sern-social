import Post from '../Post/Post'
import './posts.scss'

const Posts = ({ userId }) => {
  //   const { isLoading, error, data } = useQuery(['posts'], () =>
  //     makeRequest.get('/posts?userId=' + userId).then((res) => {
  //       return res.data
  //     })
  //   )

  const isLoading = false
  const error = ''
  const data = [
    {
      profilePic:
        'https://images.unsplash.com/photo-1676549950443-493eb7979b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      userId: 2,
      name: 'Mo Dung Phuc',
      createdAt: '2 days ago',
      desc: '"Trên đời này, hợp tan biến ảo. Mọi sự đều có may rủi, sự khác biệt của người may mắn và người không may cuối cùng đều đến từ bản tính mỗi người." - Thần điêu đại hiệp',
      img: 'https://images.unsplash.com/photo-1676490605000-a42a43a7ccbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80',
      id: '3',
    },
    {
      profilePic:
        'https://images.unsplash.com/photo-1676490605000-a42a43a7ccbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80',
      userId: 2,
      name: 'Hu Truc',
      createdAt: '2 hours ago',
      desc: 'A Tử từng hỏi Kiều Phong: "Tỷ ấy có gì tốt hơn ta? Tại sao tôi không thể sánh được với tỷ ây? Vì sao chàng luôn nghĩ về tỷ ấy, không thể quên được tỷ tỷ". Kiều Phong đáp: "Ngươi cái gì cũng đều tốt, hơn nàng ấy mọi thứ. Ngươi chỉ có một khuyết điểm, ngươi không phải nàng ấy".',
      img: 'https://images.unsplash.com/photo-1603210185246-b1662978ea37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      id: '3',
    },
  ]

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
