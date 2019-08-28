import React from 'react'
import {updateStudent, deleteStudent} from '../reducers/studentReducer'
import {connect} from 'react-redux'
import { getCampuses } from '../reducers/campusReducer';


class disconnectedEditStudentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            campusId: this.props.campusId || null,
            gpa: this.props.gpa || null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit () {
        try {
            this.props.updateStudent(this.props.id, this.state)
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                campusId: null,
                gpa: null
            })
        } catch (error) {
            console.log(error)
        }
    }
    handleDelete(event){

        let yes = confirm('Are you sure you want to delete this student?')
        if (yes) {
            this.props.deleteStudent(this.props.id)
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                campusId: null,
                gpa: null
            })
        } else return

    }
   
    componentDidMount(){
        this.props.getAllCampuses()
    }
    render(){
        
        return (
            <div className='students'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />

                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
                    
                    <label htmlFor='email'>E-mail:</label>
                    <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />

                    <label htmlFor='gpa'>GPA:</label>
                    <input type='text' name='gpa' onChange={this.handleChange} value={this.state.gpa} />

                    <label htmlFor='campusId'>Campus:</label>

                <select name='campusId' onChange={this.handleChange} value={this.state.campusId}>
                    <option name='campusId'>Enroll at one of our campuses:</option>
                    {this.props.campuses && this.props.campuses.length ? 
                        this.props.campuses.map(campus => <option key={campus.id} name='campusId' value={campus.id}>{campus.name}</option>)
                        : 'No Campuses to Display'}
                </select>
                <button type='submit'>Submit</button>
                </form>
                <button className='deleteButton' type='submit' onClick={this.handleDelete}>!Delete Student!</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateStudent: (id, updatedInfo) => dispatch(updateStudent(id, updatedInfo)),
    deleteStudent: (id) => dispatch(deleteStudent(id)),
    getAllCampuses: () => dispatch(getCampuses())
})
const mapStateToProps = state => ({
    campuses: state.campuses,
})
const EditStudentForm = connect(mapStateToProps, mapDispatchToProps)(disconnectedEditStudentForm)
export default EditStudentForm;