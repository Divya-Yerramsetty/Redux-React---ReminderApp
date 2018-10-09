import React, {Component} from 'react'

class Search extends Component {

    handleSearchInput(event){
        this.props.updateSearch_func(event.target.value)
      }

    render(){
        return(
            <div className='header'>
                <input placeholder = "Search" value={this.props.searchText} onChange={event=>this.handleSearchInput(event)}/> 
                <div className='cart-cont'> 
                    <span className='cart-font' >  {this.props.cardCart.length}</span>
                </div> 
            </div>
        )
    }
}

export default Search