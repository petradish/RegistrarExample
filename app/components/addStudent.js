import React from 'react'
import {addStudent} from '../reducers/studentReducer'
import {connect} from 'react-redux'

class disconnectedStudentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
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
                email: ''
            })
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return (
            <div>
            <h2>Add a New Student</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />

                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
                
                <label htmlFor='email'>E-mail:</label>
                <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
                <button type='submit'>Submit</button>
             </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addStudent: (studentInfo) => dispatch(addStudent(studentInfo))
})

const addStudentForm = connect(null, mapDispatchToProps)(disconnectedStudentForm)
export default addStudentForm;