import React, { Component } from 'react'
import CardContainer from './containers/CardContainer'
import Login from './login/login'
import Search from './Search'

//const URL = 'https://api.myjson.com/bins/j3cda'
const URL ='https://api.myjson.com/bins/1b4uym'
class App extends Component{

  constructor(){
    super()
    this.state = {
      newCards: [],
      cardCart: [],
      searchText: "",
      filterCards:[]
    }
  }

  updateSearch (searchInput){
    this.setState({
      searchText: searchInput
    }, () =>{

      if(searchInput !== " "){
      let output = this.state.newCards.filter((card) =>{
        return card.cardHeading.indexOf(searchInput) !== -1
      })
      console.log(output)

      this.setState({
        filterCards: output
      })
    }

    else{
      this.setState({
        filterCards: this.state.newCards
      }) 
    }

    })
  }

  handleAdd(newReminder){
    let newCard = [...this.state.cardCart, newReminder]
    this.setState({
    cardCart: newCard
    })
  }

  handleDelete (newReminder){
    let newCard = [...this.state.cardCart, newReminder]
    let editCart = newCard.filter(elem => elem !== newCard[newCard.length-1])
    this.setState({
      cardCart: editCart
    })
  }
  

render(){
  return(
    <div className = "card-board">
      <Search 
      searchText = {this.state.searchText}
      cardCart = {this.state.cardCart}
      updateSearch_func = {(searchCard)=>this.updateSearch(searchCard)} />
    
      <CardContainer 
      cards = {this.state.filterCards}
      cardCart = {this.state.cardCart}
      handleAddInCardContainer = {(card)=>this.handleAdd(card)}
      handleDeleteInCardContainer = {(card)=>this.handleDelete(card)}
       />
    </div>
  );
}


componentDidMount(){
  let that = this
  fetch(URL)
 
  .then(function(response){
    //console.log("This data is from API", response)
    return response.json()
  })

  .then(function(newResponse){
    that.setState({
      newCards: newResponse,
      filterCards: newResponse
      })
  })

  .catch(function(error){
    console.log(error)
})

}
}

export default App

