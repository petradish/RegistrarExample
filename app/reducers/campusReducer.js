import Axios from "axios";

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'


const gotCampuses = campuses => ({type: GET_CAMPUSES, campuses});
const gotSingleCampus = (campus, students) => ({type: GET_SINGLE_CAMPUS, campus, students})
const addedCampus = (campus) => ({type: ADD_CAMPUS, campus})


export const getCampuses = () => async dispatch => {
    try {
        const {data} = await Axios.get('/api/campuses')
        dispatch(gotCampuses(data))
    } catch (err) {
        console.log(err)
    }
}
export const getSingleCampus = (id) => async dispatch => {
    try {
        const {data} = await Axios.get(`/api/campuses/${id}`)
        dispatch(gotSingleCampus(data, data.students))
    } catch (err) {
        console.log(err)
    }
}

export const addCampus = (campusInfo) => async dispatch => {
    try {
        const {data} = await Axios.post('/api/campuses', campusInfo);
        dispatch(addedCampus(data))
    } catch (err) {
        console.log(err)
    }
}

export const campusReducer = (state = [], action) => {
    switch (action.type){
        case GET_CAMPUSES:
            return action.campuses
        case GET_SINGLE_CAMPUS:
            return [action.campus, action.students]
        case ADD_CAMPUS:
            return action.campus
        default:
            return state;
    }
}