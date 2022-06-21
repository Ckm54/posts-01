import * as React from 'react'
import { IPost } from '../../types/index'

type Props = {
  post: IPost
  deletePost: (id: number) => void
}

const Post: React.FC<Props> = ({post, deletePost}) => {
  return (
    <div className="card">
      <div className="card--body">
        <h1 className="card--body-title">{post.title}</h1>
        <p className="card--body-text">{post.body}</p>
      </div>
      <button className="card__button" onClick={() => deletePost(post.id)}>
        Delete
      </button>
    </div>
  )
}

export default Post