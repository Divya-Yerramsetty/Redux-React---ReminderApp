import {combineReducers} from 'redux'

import cardsReducer from './cardsReducer'
import userReducer from './userReducer'

var combinedReducers = combineReducers({
    cards: cardsReducer,
    user: userReducer
})

export default combinedReducers