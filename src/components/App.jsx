import { Component } from 'react'
import  { Toaster } from 'react-hot-toast';


import { Searchbar } from './Search/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Loader } from './Loader/Loader';
// import { Button } from "components/Button/Button";
// import { Modal } from './Modal/Modal';


export class App extends Component {
  state ={
    imgSerach:''
  }

  handleSabmit=(imgSerach)=>{
    this.setState({imgSerach})
  }


  render(){
  return (
    <div>
      <Toaster
      toastOptions={{
        duration: 1000,
        style: {
          background: '#363636',
          color: '#fffa',
        }}}
      />
       <Searchbar onSearch={this.handleSabmit}/>
       <ImageGallery value={this.state.imgSerach} /> 
       {/* <Loader/> */}
       {/* <Button onClick={this.handleMore}/> */}

       {/* <Modal/> */}

    </div>
  );}
};
 