import {Component} from "react"


export class Modal extends Component{

 render(){
  return(
    <div className="overlay">
  <div className="modal">{this.props.children}</div>
</div>
  )
 }
}
