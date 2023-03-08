import { getImg } from "components/fetch/getImg"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Component } from "react"
import toast from 'react-hot-toast';
import css from '../../style/styles.css'
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";




export class ImageGallery  extends Component{
  state={
    img: null,
    loading: false,
    error: '',
    page: 1,
   
  }
   

  componentDidUpdate(prevProps, PrevState){
    

    if(prevProps.value !== this.props.value ||
      PrevState.page !== this.state.page ){
      this.setState({loading: true})

      getImg(this.props.value.trim(), this.state.page)
      .then((response) =>{
        return response.json()
      })
        
      .then((img)=>{
        console.log(img)
        if(img.hits.length <=0){
          this.setState({img:''})
          toast('не вірний')
          return
        }
        
        this.setState({
          img
        })
      }
        )
      .catch((error)=>{console.log(error)})
      .finally(()=>{
        this.setState({loading:false})
      })
    }
    if(PrevState.page !== this.state.page){

      getImg(this.props.value.trim(), this.state.page)
      .then((response) =>{
        return response.json()}).then((img)=>{this.setState({img})})
    }
  }
  handleMore=()=>{
    this.setState((prev)=>({page: prev.page +1}))
  }

render(){
  return(
    <>
    {this.state.loading&&<Loader/>}
    {this.state.img && this.state.img.hits.map(({id, largeImageURL}) =>{
      return  <ul key={id} className={css.gallery}>
        <ImageGalleryItem 
        id={id}
        largeImageURL={largeImageURL}
        />
    </ul>
    })}
    <Button onClick={this.handleMore}/>
    </>
  )
}
 } 
