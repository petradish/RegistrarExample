import Axios from "axios";

export const GET_CAMPUSES = 'GET_CAMPUSES'

const gotCampuses = campuses => ({type: GET_CAMPUSES, campuses});

export const getCampuses = () => async dispatch => {
    try {
        const {data} = await Axios.get('/api/campuses')
        dispatch(gotCampuses(data))
    } catch (err) {
        console.log(err)
    }

}


export const campusReducer = (state = [], action) => {
    switch (action.type){
        case GET_CAMPUSES:
            return action.campuses
        default:
            return state;
    }
}