import {Component} from "react"
// import toast from 'react-hot-toast';
// import css from '../../style/styles.css'


export class Searchbar extends Component {
  state ={
    search: ' ',
  }

  handleChange = ({target}) => {
    const {name,value} =target
    this.setState({[name]: value})

  }


  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.onSubmit({...this.state})
    this.setState({search: ' '})

  }


 render(){
  return (
  <header className="searchbar">
  <form className="form"
    onSubmit={this.handleSubmit}>
    <input
      img={this.state.search}
      onChange={this.handleChange}
      type="text"
      autoComplete="off"
      autoFocus
      name="search"
      placeholder="Search images and photos"
    />
     <button type="submit">
      <span className="button-label">Search</span>
    </button>
  </form>
</header>
 )
  }
}