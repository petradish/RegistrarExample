import Axios from "axios";

const GET_STUDENTS = 'GET_STUDENTS'
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'

const gotStudents = students => ({type: GET_STUDENTS, students});
const gotSingleStudent = (student, campus) => ({type: GET_SINGLE_STUDENT, student, campus})
const addedStudent = student => ({type: ADD_STUDENT, student})
const deletedStudent = studentId => ({type: DELETE_STUDENT, studentId})
const updatedStudent = student =>({type: UPDATE_STUDENT, student})

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

export const deleteStudent = studentId => async dispatch => {
    try {
        await Axios.delete(`/api/students/${studentId}`)
        dispatch(deletedStudent(studentId))
    } catch (err) {
        console.log(err)
    }
}
export const updateStudent = (studentId, updatedFields) => async dispatch => {
    try {
        const {data} = await Axios.put(`/api/students/${studentId}`, updatedFields)
        dispatch(updatedStudent(data))
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
        case DELETE_STUDENT:
            const updatedStudents = state.filter(student => student.id !== action.studentId && !student.name)
            return updatedStudents
        case UPDATE_STUDENT:
            return action.student
        default:
            return state;
    }
}