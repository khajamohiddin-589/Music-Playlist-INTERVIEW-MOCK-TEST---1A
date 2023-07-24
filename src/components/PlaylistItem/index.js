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
        <img src={imageUrl} className="img-style" alt="track" />
        <div className="inner-details">
          <p className="details-heading">{name}</p>
          <p className="details-para">{genre}</p>
        </div>
      </div>
      <div className="end">
        <p className="time">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onClickDelete}
        >
          <AiOutlineDelete
            data-testid="delete"
            onClick={onClickDelete}
            className="icon-inner"
          />
        </button>
      </div>
    </li>
  )
}

export default PlaylistItem
