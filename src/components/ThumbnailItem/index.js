import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, clickImg} = props
  const {thumbnailUrl, thumbnailAltText, id} = imgDetails

  const onClickImage = () => {
    clickImg(id)
  }
  return (
    <li>
      <button onClick={onClickImage} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
