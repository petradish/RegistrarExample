import Axios from "axios";

export const GET_STUDENTS = 'GET_STUDENTS'

const gotStudents = students => ({type: GET_STUDENTS, students});

export const getStudents = () => async dispatch => {
    const {data} = await Axios.get('/api/students')
    dispatch(gotStudents(data))
}


export const studentReducer = (state = [], action) => {
    switch (action.type){
        case GET_STUDENTS:
            return action.students
        default:
            return state;
    }
}