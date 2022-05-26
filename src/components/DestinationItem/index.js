import './index.css'

const DestinationItem = Props => {
  const {DestinationItemDetails} = Props
  const {imgUrl, name} = DestinationItemDetails
  return (
    <l1 className="imagContainer">
      <img src={imgUrl} alt="name" className="imageDimension" />
      <p className="title_of_image">{name}</p>
    </l1>
  )
}

export default DestinationItem
