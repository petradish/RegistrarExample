import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteStudent} from '../reducers/studentReducer'

const disconnectedSingleStudent = props => {
    const {id, firstName, lastName, imageUrl} = props.student;
    return (
        <div className='singlestudent'>
            <Link className='schoollink' to={`/students/${id}`}> 
            <h2>{firstName} {lastName}</h2></Link>
            <button type='button' onClick={() => props.deleteStudent(id)}>X</button>
            <img src={imageUrl} />

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: id => dispatch(deleteStudent(id))
})
const SingleStudent = connect(null, mapDispatchToProps)(disconnectedSingleStudent)
export default SingleStudent