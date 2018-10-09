const defaultState = {
    cardCartFromRedux :[],
    searchTextFromRedux: ''
}

function cardsReducer(previousState = defaultState, action){
    debugger
    switch (action.type){
        
        case 'ADD_TO_CART':
            let newState = Object.assign({},previousState,{cardCartFromRedux: [...previousState.cardCartFromRedux, action.card] })
            return newState
        
        case 'DEL_FROM_CART':
            
            let delState = previousState.cardCartFromRedux[0].filter(id => id !== action.card)
            return delState

        default:
            return previousState

    }

}

module.exports = cardsReducer
