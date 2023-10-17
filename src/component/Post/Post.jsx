import './Post.css'

import Like from '../Icon/Like'
import Star from '../Icon/Star'

const Post = ({ poster, title, rating }) => {
  return (
    <div className="postCard">
      <div className="imageCard">
        <img src={`/posters/${poster}`} />
        <div className="ratingCard">
          <Star />
          <span>{rating}</span>
        </div>
      </div>
      <div className="contentCard">
        <span>{title}</span>
        <span className="likeCard">
          <Like />
          <span>В избранное</span>
        </span>
      </div>
    </div>
  )
}

export default Post
