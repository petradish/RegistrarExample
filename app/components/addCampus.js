import React from 'react'
import {addCampus} from '../reducers/campusReducer'
import {connect} from 'react-redux'

class disconnectedCampusForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            description: ''
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
            this.props.addCampus(this.state)
            alert(`${this.state.name} has been successfully added to our campus list.`)
            this.setState({
                name: '',
                address: '',
                description: ''
            })
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return (
            <div className='campuses'>
            <h2>Add a New Campus</h2>
            <form className='form' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />

                <label htmlFor='address'>Address:</label>
                <input type='address' name='address' onChange={this.handleChange} value={this.state.address} />
                <label htmlFor='description'>Description:</label>
                    <textarea id='fieldbox' name='description' onChange={this.handleChange} value={this.state.description} />
                <button type='submit'>Submit</button>
             </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addCampus: (campusInfo) => dispatch(addCampus(campusInfo))
})

const addCampusForm = connect(null, mapDispatchToProps)(disconnectedCampusForm)
export default addCampusForm;