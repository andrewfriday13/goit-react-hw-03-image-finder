import { getImg } from "components/fetch/getImg"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Component } from "react"
import toast from 'react-hot-toast';



export class ImageGallery  extends Component{
  state={
    img: null,
    loading: false,
    error: '',
  }
   

  componentDidUpdate(prevProps){
    // console.log(this.props.value)
    if(prevProps.value !== this.props.value){
      this.setState({loading: true})
      getImg(this.props.value)
      .then((response) => response.json())
      .then((img)=>{
        console.log(img)
        if(img.hits.length <=0){
          this.setState({img:''})
          toast('не вірний запит')

          return
        }
        this.setState({img})})
      .catch((error)=>{this.setState({error})})
      .finally(()=>{
        this.setState({loading:false})
      })
    }
  }

render(){
  return(
    <>
    {this.state.loading&&<p>loading</p>}
    {this.state.img && this.state.img.hits.map(({id, largeImageURL}) =>{
      // console.log(el.pageURL)
      return  <ul key={id} className="gallery">
        <ImageGalleryItem 
        id={id}
        largeImageURL={largeImageURL}
        />
    </ul>
    })}</>
  )
}
 } 
