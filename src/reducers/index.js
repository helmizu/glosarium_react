import { combineReducers } from 'redux'
import glosariumReducer from '../reducers/glosariumReducer'

export default combineReducers({
    glosarium : glosariumReducer
})