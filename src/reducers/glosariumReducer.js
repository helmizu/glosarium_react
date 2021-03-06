import { GET_DATA, SET_LOADING, GET_ALL_DATA, SET_LABEL, GET_COLLECTION, DATA_SELECTED, SEARCH_INPUT, SEARCH_LIST } from "../config/type";

const initialState = {
    data : [],
    report : '',
    loading : false,
    label : [],
    labelSelected : [],
    searchListed : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
        return {
            ...state,
            data : action.payload,
            loading : false
        }
        case GET_DATA:
        return { 
            ...state,
            labelSelected : action.payload,
            loading : false
            
        }
        case SET_LOADING: 
        return {
            ...state,
            loading : true
        }
        case SET_LABEL: 
        return {
            ...state,
            label: action.payload
        }
        case GET_COLLECTION:
        return {
            ...state,
            label : action.payload
        } 
        case DATA_SELECTED:
        return {
            ...state,
            labelSelected : action.payload
        }
        case SEARCH_INPUT:
        return {
            ...state,
            labelSelected : action.payload
        }
        case SEARCH_LIST:
        return {
            ...state,
            searchListed : action.payload
        }
        default:
        return state
    }
}
