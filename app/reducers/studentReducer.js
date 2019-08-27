import Axios from "axios";
import gotSingleCampus from './campusReducer'

const GET_STUDENTS = 'GET_STUDENTS'
export const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'

const gotStudents = students => ({type: GET_STUDENTS, students});
const gotSingleStudent = (student, campus) => ({type: GET_SINGLE_STUDENT, student, campus})

export const getStudents = () => async dispatch => {
    try {
        const {data} = await Axios.get('/api/students')
        dispatch(gotStudents(data))
    } catch (err) {
        console.log(err)
    }
}
export const getSingleStudent = (id) => async dispatch => {
    try {
        const {data} = await Axios.get(`/api/students/${id}`)
        dispatch(gotSingleStudent(data, data.campus))
        // console.log(data.campus)
        // dispatch(gotSingleCampus(data.campus))
    } catch (err) {
        console.log(err)
    }
}

export const studentReducer = (state = [], action) => {
    switch (action.type){
        case GET_STUDENTS:
            return action.students
        case GET_SINGLE_STUDENT:
            return [action.student, action.campus]
        default:
            return state;
    }
}