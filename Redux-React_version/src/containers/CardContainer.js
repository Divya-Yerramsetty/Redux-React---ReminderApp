import React from 'react'
import SampleCard from '../../src/SampleCard'

const CardContainer = (props) => {
    return(
        <div className = "cards">
            {
                props.cards.map(function(eachProduct){
                    return <SampleCard
                    key = {eachProduct.id} 
                    cardHeading = {eachProduct.cardHeading}
                    cardContent={eachProduct.cardContent}
                    cardImage={eachProduct.cardImage} 
                    cardId = {eachProduct.id}
                    handleAddToSample = {(card)=> props.handleAddInCardContainer(card)}
                    handleDeleteToSample = {(card)=>props.handleDeleteInCardContainer(card)}
                    isAddedToCart={props.cardCart.indexOf(eachProduct.id) >= 0}
                    />
                })
            }
        </div>  
    )
}


export default CardContainer