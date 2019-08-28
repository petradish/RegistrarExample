import React from 'react'
import {addStudent} from '../reducers/studentReducer'
import {connect} from 'react-redux'
import { getCampuses } from '../reducers/campusReducer';


class disconnectedStudentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            campusId: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit (event) {
        try {
            event.preventDefault()
            this.props.addStudent(this.state)
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                campusId: null
            })
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
        this.props.getAllCampuses()
    }
    render(){
        
        return (
            <div className='students'>
            <h2>Add a New Student</h2>
            <form className='form' onSubmit={this.handleSubmit}>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />

                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
                
                <label htmlFor='email'>E-mail:</label>
                <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
                <label htmlFor='campusId'>Campus:</label>

            <select name='campusId' onChange={this.handleChange} value={this.state.campusId}>
                <option name='campusId' value={null}>Enroll at one of our campuses:</option>
                {this.props.campuses && this.props.campuses.length ? 
                    this.props.campuses.map(campus => <option key={campus.id} name='campusId' value={Number(campus.id)}>{campus.name}</option>)
                    : 'No Campuses to Display'}
            </select>
            <button type='submit'>Submit</button>
             </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addStudent: (studentInfo) => dispatch(addStudent(studentInfo)),
    getAllCampuses: () => dispatch(getCampuses())
})
const mapStateToProps = state => ({
    campuses: state.campuses,
})
const AddStudentForm = connect(mapStateToProps, mapDispatchToProps)(disconnectedStudentForm)
export default AddStudentForm;