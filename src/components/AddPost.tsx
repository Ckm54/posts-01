import * as React from 'react'
import { IPost } from '../../types/index' 

type Props = {
  savePost: (e: React.FormEvent, formData: IPost) => void
}

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<IPost>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => savePost(e, formData)}>
      <div>
        <div className='Form-field'>
          <label htmlFor="name">Title</label>
          <input type="text" onChange={handleForm} id='title' />
        </div>
        <div className='Form-field'>
          <label htmlFor="body">Description</label>
          <input type="text" onChange={handleForm} id='body' />
        </div>
      </div>
      <button className='Form__button' disabled={formData === undefined ? true : false}>
        Add Post
      </button>
    </form>
  )
}

export default AddPost