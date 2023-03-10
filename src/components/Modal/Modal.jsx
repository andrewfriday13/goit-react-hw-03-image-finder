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
    console.log(target)
    console.log(currentTarget)

    if(code === 'Escape' || target.className === 'overlay' && target === currentTarget) {
     this.props.onClose()
     return
    }
  }

 render(){
  return createPortal(
  <div className="overlay" onClick={this.closeModal }>
    <div className="modal">{this.props.children}</div>
    </div>, modalRoot)
  
 }
}


