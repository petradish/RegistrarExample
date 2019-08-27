import Axios from "axios";

const GET_STUDENTS = 'GET_STUDENTS'
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'

const gotStudents = students => ({type: GET_STUDENTS, students});
const gotSingleStudent = (student, campus) => ({type: GET_SINGLE_STUDENT, student, campus})
const addedStudent = student => ({type: ADD_STUDENT, student})

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

export const addStudent = (studentInfo) => async dispatch => {
    try {
        const {data} = await Axios.post(`/api/students`, studentInfo)
        dispatch(addedStudent(data))
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
        case ADD_STUDENT:
            return action.student
        default:
            return state;
    }
}