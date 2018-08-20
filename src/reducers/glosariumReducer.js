import { GET_DATA, SET_LOADING, GET_ALL_DATA, SET_LABEL } from "../config/type";

const initialState = {
    data : [],
    report : '',
    loading : false,
    label : ''
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
            data : action.payload,
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
        default:
        return state
    }
}
