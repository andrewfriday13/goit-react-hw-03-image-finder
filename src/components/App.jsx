import { Component } from 'react'
import  { Toaster } from 'react-hot-toast';
import { getImg } from './fetch/getImg';
import toast from 'react-hot-toast';
// import { basicLightbox } from 'basiclightbox';




import { Searchbar } from './Search/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from "components/Button/Button";
import { Modal } from './Modal/Modal';


export class App extends Component {
  state ={
    img: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    totalImg: null,
    isModalOpen: false,
    imgInModal: null,
  }
  componentDidUpdate(_, prevState){
    const { search, page } = this.state;
    

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      getImg(search, page)

        .then(data => {
          if(data.hits.length<=0){
            this.setState({img:[]})
            toast('не вірний запит')
            return
          }
          this.setState(({ img }) => ({
            img: [...img, ...data.hits],
          }));
          this.setState({ totalImg: data.totalHits });
        })

        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSabmit=({ search }) => {
    this.setState({ search: search.trim(), img: [], page: 1 });
    document.querySelector('input').value = '';
  };
  

  handleMore=()=>{
    this.setState(prevState =>{
      return{
        page: prevState.page +1
      }
    })
  }

  openModal = (image) => {
   this.setState({
    isModalOpen: !this.state.isModalOpen, 
    imgInModal: image,})
  }

  closeModal=()=>{
    this.setState({
      isModalOpen: !this.state.isModalOpen, 
      imgInModal: null,

    })
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
       <Searchbar onSubmit={this.handleSabmit} />
       <ImageGallery
        img={this.state.img}
        openModal={this.openModal}
        /> 
       {this.state.loading && (<Loader/>)}
       {this.state.img.length >0  && <Button onClick={this.handleMore}/>}

       {!this.imgInModal && (
       <Modal onClose={this.closeModal}>
        <img src={this.state.imgInModal} alt="" width='400' />
       </Modal>)}

    </div>
  )}
}
 