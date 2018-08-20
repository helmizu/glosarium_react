import { GET_ALL_DATA, SET_LOADING, SET_LABEL, GET_DATA } from "../config/type";
import Axios from "axios";

export const getAllData = (search = "") => dispatch => {
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium/all?search=${search}`).then(res =>
        dispatch({
            type: GET_ALL_DATA,
            payload: res.data
        })
    )
}

export const getData = (label) => dispatch => {
    dispatch(setLoading())
    Axios.get(`http://localhost:7000/glosarium?label=${label}`).then(res =>
        dispatch({
            type: GET_DATA,
            payload: res.data
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