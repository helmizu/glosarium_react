import { GET_ALL_DATA, SET_LOADING, SET_LABEL, GET_DATA, GET_COLLECTION, DATA_SELECTED, SEARCH_INPUT, SEARCH_LIST } from "../config/type";
import Axios from "axios";

const baseUrl = 'https://beta.arkademy.com/api/glosarium'
export const getAllData = () => dispatch => {
    dispatch(setLoading())
    Axios.get(`${baseUrl}/all`).then(res =>
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )
}

export const getData = (label) => dispatch => {
    dispatch(setLoading())
    Axios.get(`${baseUrl}?label=${label}`).then(res =>
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    )
}

export const getCollection = () => dispatch => {
    Axios.get(`${baseUrl}/collection`)
    .then(res => 
        dispatch({
            type : GET_COLLECTION,
            payload : res.data
        })
    )
}

export const setLoading = () => ({
    type: SET_LOADING
})

export const setLabel = (label) => dispatch => {
    dispatch({
        type: SET_LABEL,
        payload: label
    })
}

export const dataSelected = (data) => dispatch => {
    dispatch({
        type: DATA_SELECTED,
        payload: data
    })
}

export const searchData = (search) => dispatch => {
    Axios.get(`${baseUrl}/all?search=${search}`).then(res =>
        dispatch({
            type: SEARCH_INPUT,
            payload: res.data
        })
    )
}

export const searchList = (search) => dispatch => {
    Axios.get(`${baseUrl}/all?search=${search}`).then(res =>
        dispatch({
            type: SEARCH_LIST,
            payload: res.data
        })
    )
}