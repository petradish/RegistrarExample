import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteStudent} from '../reducers/studentReducer'


class disconnectedSingleStudent extends React.Component {

    // componentDidMount(){
    //     this.props.getCampus(this.props.campusId)
    // }
    render(){
        const {id, firstName, lastName, imageUrl} = this.props.student;
        return (
            <div className='singlestudent'>
                <Link className='schoollink' to={`/students/${id}`}> 
                <h2>{firstName} {lastName}</h2></Link>
                <button type='button' onClick={() => {
                    let yes = confirm(`Are you sure you want to delete ${firstName} ${lastName}?`)
                    if (yes) {
                        this.props.deleteStudent(id)
                    } else return}}>
                    X
                </button>
                <img src={imageUrl} />
    
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: id => dispatch(deleteStudent(id)),
})

const SingleStudent = connect(null, mapDispatchToProps)(disconnectedSingleStudent)
export default SingleStudent