import React from 'react'
import {getStudents, updateStudent} from '../reducers/studentReducer'
import {connect} from 'react-redux'
import { deleteCampus, updateCampus } from '../reducers/campusReducer';


class disconnectedEditCampusForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            address: props.address,
            description: props.description
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
 
    handleSubmit (event) {
        try {
            this.props.updateCampus(this.props.id, this.state)
            const studentId = Number(document.getElementById('studentId').value)
        
            this.props.enrollStudent(studentId, {campusId: this.props.id})
            this.setState({
                name: '',
                address: '',
                description: '',
            })
        } catch (error) {
            console.log(error)
        }
    }
    handleDelete(event){

        let yes = confirm('Are you sure you want to delete this campus?')
        if (yes) {
            this.props.deleteCampus(this.props.id)
            this.setState({
                name: '',
                address: '',
                description: '',
            })
        } else return

    }
   
    componentDidMount(){
        this.props.getAllStudents()
    }
    render(){
        return (
            <div className='campuses'>
                <h3>Edit Campus:</h3>
                <form className='form' onSubmit={this.handleSubmit}>
                
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />

                    <label htmlFor='address'>Address:</label>
                    <input type='text' name='address' onChange={this.handleChange} value={this.state.address} />
                    
                    <label htmlFor='description'>Description:</label>
                    <textarea id='fieldbox' name='description' onChange={this.handleChange} value={this.state.description} />

                    <label htmlFor='studentId'>Enroll:</label>

                <select id='studentId'>
                    <option name='studentId'>Select A Student</option>
                    {this.props.students && this.props.students.length ? 
                        this.props.students.filter(student => student.campusId !== this.props.id)
                        .map(student => <option key={student.id} name='studentId' value={student.id}>{student.firstName} {student.lastName}</option>)
                        : 'No Students to Display'}
                </select>
                       
                <button type='submit'>Submit</button>
                </form>
                <button className='deleteButton' type='submit' onClick={this.handleDelete}>! Delete Campus !</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCampus: (id, updatedInfo) => dispatch(updateCampus(id, updatedInfo)),
    deleteCampus: (id) => dispatch(deleteCampus(id)),
    getAllStudents: () => dispatch(getStudents()),
    enrollStudent: (id, campusId) => dispatch(updateStudent(id, campusId))
})
const mapStateToProps = state => ({
    students: state.students,
})
const EditCampusForm = connect(mapStateToProps, mapDispatchToProps)(disconnectedEditCampusForm)
export default EditCampusForm;