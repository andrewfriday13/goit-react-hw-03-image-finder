import { getImg } from "components/fetch/getImg"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Component } from "react"
import toast from 'react-hot-toast';

import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";

export class ImageGallery  extends Component{
  state={
    img: [],
    loading: false,
    error: '',
    page: 1,
    currentPage: 1,
  }

  componentDidUpdate(prevProps, PrevState){
    
    if(prevProps.value !== this.props.value || 
      PrevState.currentPage !== this.state.currentPage ){

      this.setState({loading: true})

      getImg(this.props.value.trim(), this.state.page)
      .then((response) =>{
        return response.json()
      })
        
      .then((img)=>{

        if(img.hits.length <=0){
          this.setState({img:[]})
          toast('не вірний')
          return
        }
        this.setState(prev=>({
          img:[...prev.img, ...img.hits]
        }))
      }
        )
      .catch((error)=>{console.log(error)})
      .finally(()=>{
        this.setState({loading:false})
      })
    }
   
  }
  handleMore=()=>{
    this.setState((prev)=>({page: prev.page +1, currentPage: prev.currentPage + 1}))
  }

render(){
  return(
    <>
    {this.state.loading&&<Loader/>}
    {this.state.img && this.state.img.map(({id, largeImageURL}) =>{
      return  <ImageGalleryItem 
        id={id}
        largeImageURL={largeImageURL}
        />

    })}
    {this.state.img && this.state.img.length > 0 && (<Button onClick={this.handleMore}/>)}
    </>
  )
}
 } 
