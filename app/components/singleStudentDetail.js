import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getSingleStudent } from '../reducers/studentReducer';


class disconnectedSingleStudentDetail extends React.Component {
    componentDidMount(){
        const studentId = this.props.match.params.id
        this.props.getStudent(studentId)
    
    }
    render(){
        const {firstName, lastName, imageUrl, email, gpa} = this.props.student
     
        return (
            <div>
                <h3>{firstName} {lastName}</h3>
                <h4>I attend: {this.props.campus ? <Link to={`/campuses/${this.props.campus.id}`}>{this.props.campus.name}</Link> : 'Not currently enrolled' }</h4>
                <h4>Send me an email: {email}</h4>
                <img src={imageUrl} />
                <p>GPA: {gpa}</p>
            </div>
        )
    }
    
}
const mapStateToProps = state => ({
    student: state.students[0],
    campus: state.students[1]
})
const mapDispatchToProps = dispatch => ({
    getStudent: (id) => dispatch(getSingleStudent(id))
})

const SingleStudentDetail = connect(mapStateToProps, mapDispatchToProps)(disconnectedSingleStudentDetail)
export default SingleStudentDetail;