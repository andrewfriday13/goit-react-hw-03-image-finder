import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery =({img, openModal})=>{

    return(
        <ul style={{display: 'flex'}}>
         {img.map(({ id, webformatURL, largeImageURL }) => (
         <ImageGalleryItem
          key={id}
          openModal={openModal}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
        </ul>
    )
}





























// export const ImageGallery=({img})=> {
//   // state={
//   //   img: [],
//   //   loading: false,
//   //   error: '',
//   //   page: 1,
//   // }

//   // componentDidUpdate(prevProps, PrevState){
    

//   //   if(prevProps.value !== this.props.value ||
//   //     PrevState.page !== this.state.page ){
//   //     this.setState({loading: true})

//   //     getImg(this.props.value.trim(), this.state.page)
//   //     .then((response) =>{
//   //       return response.json()
//   //     })
//   //     .then((img)=>{

//   //       if(img.hits.length <=0){
//   //         this.setState({img:[]})
//   //         toast('не вірний')
//   //         return
//   //       }
        
//   //       this.setState({
//   //         img: [...this.state.img, ...img.hits]
//   //         // img
//   //       })
//   //     }
//   //       )
//   //     .catch((error)=>{console.log(error)})
//   //     .finally(()=>{
//   //       this.setState({loading:false})
//   //     })
//   //   }
   
//   // }
//   // handleMore=()=>{
//   //   this.setState((prev)=>({page: prev.page +1}))
//   // }


//   return(
//     <>
//     <>
//             <ul >
//               {img.map(({ id, webformatURL, largeImageURL }) => {
//                 return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />;
//               })}
//             </ul>
//           </>
//           <Button onClick={this.handleMore}/>
//     {/* {this.state.loading&&<Loader/>}
//     {this.state.img && (
          
//         )} */}
//     {/* {this.state.img.length > 0 &&()} */}
//     </>
//   )
// }
 
