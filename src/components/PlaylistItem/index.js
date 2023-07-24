import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlaylistItem = props => {
  const {eachItem, deleteItem} = props
  const {id, name, imageUrl, genre, duration} = eachItem

  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="item">
      <div className="start">
        <img src={imageUrl} className="img-style" alt={name} />
        <div className="inner-details">
          <h1 className="details-heading">{name}</h1>
          <p className="details-para">{genre}</p>
        </div>
      </div>
      <div className="end">
        <h1 className="time">{duration}</h1>
        <AiOutlineDelete onClick={onClickDelete} className="icon-inner" />
      </div>
    </li>
  )
}

export default PlaylistItem
