export const ImageGalleryItem =({id, largeImageURL})=>{
  return(
    <li className="gallery-item" key={id}>
  <img src={largeImageURL} alt="" width='200' />
</li>
  )
}