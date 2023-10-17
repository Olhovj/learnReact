import Post from '../Post'
import './Posts.css'

import data from '../../dataFilm.json'

const Posts = () => {
  return (
    <div className="posts">
      {data.map((item) => (
        <Post
          key={item.id}
          title={item.title}
          rating={item.rating}
          poster={item.poster}
        />
      ))}
    </div>
  )
}

export default Posts
