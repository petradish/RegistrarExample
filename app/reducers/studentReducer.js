import Axios from "axios";

export const GET_STUDENTS = 'GET_STUDENTS'

const gotStudents = students => ({type: GET_STUDENTS, students});

export const getStudents = () => async dispatch => {
    try {
        const {data} = await Axios.get('/api/students')
        dispatch(gotStudents(data))
    } catch (err) {
        console.log(err)
    }

}


export const studentReducer = (state = [], action) => {
    switch (action.type){
        case GET_STUDENTS:
            return action.students
        default:
            return state;
    }
}