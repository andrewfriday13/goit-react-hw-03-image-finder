import {Component} from "react"
import { createPortal } from "react-dom"

const modalRoot =document.querySelector('#modal-root')
export class Modal extends Component{

  componentDidMount(){

    window.addEventListener('keydown', this.closeModal)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',this.closeModal)
  }

  closeModal = ({code, target, currentTarget}) =>{
    if(code === 'Escape' || target === currentTarget) {
     this.props.onClose()
    }
  }

 render(){
  return(
    createPortal(<div className="overlay" onClick={this.closeModal }>
    <div className="modal">{this.props.children}</div>
    </div>, modalRoot)
  )
 }
}


