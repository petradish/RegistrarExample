import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getSingleStudent, updateStudent, deleteStudent } from '../reducers/studentReducer';
import EditStudentForm from './editStudentForm'


class disconnectedSingleStudentDetail extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            editMode: false
        }
        this.editMode = this.editMode.bind(this)
    }
    componentDidMount(){
        const studentId = this.props.match.params.id
        this.props.getStudent(studentId)
    
    }

    editMode(){
        this.setState({
            editMode: !this.state.editMode
        })
    }
    render(){

        if (this.props.student) {
            const {campusId, id, firstName, lastName, imageUrl, email, gpa} = this.props.student
     
            return (
                <div className='studentview'>
                    <div className='studentdetail'>
                        <div className='studentheader'>
                            <h1>{firstName} {lastName}</h1>
                            <button type='button' className='edit' onClick={() => this.editMode()}>Edit</button>
                        </div>
                       
                        <h2>I attend: {this.props.campus ? <Link className='schoollink' to={`/campuses/${this.props.campus.id}`}>{this.props.campus.name}</Link> : 'Not currently enrolled' }</h2>
                        <h3>Send me an email at: <a href={`mailto: ${email}`}>{email}</a></h3>
                        <img src={imageUrl} />
                        <h3>GPA: {gpa}</h3>
                    </div>
                    {this.state.editMode ? 
                    <div className='studentUpdate'>
                        <h2>Edit Student:</h2>
                        <EditStudentForm id={id} firstName={firstName} lastName={lastName} email={email} gpa={gpa} campusId={campusId} />
                    </div>
                    : null
                    }
                </div>
            )
        } else {
            return (
            <h1>There is no such student registered!</h1>
        )
        }
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