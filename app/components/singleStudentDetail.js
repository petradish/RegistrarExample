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

        if (this.props.student) {
            const {firstName, lastName, imageUrl, email, gpa} = this.props.student
     
            return (
                <div className='studentdetail'>
                    <h1>{firstName} {lastName}</h1>
                    <h2>I attend: {this.props.campus ? <Link className='schoollink' to={`/campuses/${this.props.campus.id}`}>{this.props.campus.name}</Link> : 'Not currently enrolled' }</h2>
                    <h3>Send me an email at: <a href={`mailto: ${email}`}>{email}</a></h3>
                    <img src={imageUrl} />
                    <h3>GPA: {gpa}</h3>
                </div>
            )
        } else return (
            <h1>There is no such student registered!</h1>
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