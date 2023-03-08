import {Component} from "react"
import toast from 'react-hot-toast';
import css from '../../style/styles.css'


export class Searchbar extends Component {
  state ={
    value: '',
  }

  handleChange = ({target:{value}}) => {
    this.setState({value})
  }


  handleSubmit=(event)=>{
    event.preventDefault()
    if(!this.state.value){
      toast('пиши назву картинки')
      return
    }
    this.props.onSearch(this.state.value)
    this.setState({value:''})

  }


 render(){
  return (
  <header className="searchbar">
  <form className="form"
    onSubmit={this.handleSubmit}>
   

    <input
      className={css.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      img={this.state.value}
      onChange={this.handleChange}
    />
     <button type="submit" className={css.Button}>
      <span className="button-label">Search</span>
    </button>
  </form>
</header>
 )
  }
}