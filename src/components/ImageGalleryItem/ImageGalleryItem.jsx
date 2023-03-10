

export const ImageGalleryItem =({id,webformatURL, largeImageURL,openModal})=>{
  return(
    <li className="gallery-item" key={id}>
  <img 
  src={webformatURL} 
  alt="" 
  width='200'
  onClick={()=>{openModal(largeImageURL)}} />
</li>
  )
}