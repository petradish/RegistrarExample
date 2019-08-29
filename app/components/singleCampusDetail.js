import React from 'react'
import {connect} from 'react-redux'
import { getSingleCampus } from '../reducers/campusReducer';
import {deleteStudent} from '../reducers/studentReducer';
import SingleStudent from './singleStudent';
import EditCampusForm from './editCampusForm';

class disconnectedSingleCampusDetail extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            editMode: false
        }
        this.editMode = this.editMode.bind(this)
    }
    componentDidMount(){
        const campusId = this.props.match.params.id
        this.props.getCampus(campusId)

    }
    editMode(){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render(){
       
        if (this.props.campus) {
            const {id, name, imageUrl, description, address} = this.props.campus;
       
            return (
                <div className='campusdetail'>
                    
                        {!this.state.editMode ?
                        <div id='description'>
                            <h3>Description:</h3>
                            <p>{description}</p>
                            <button type='button' className='edit' onClick={() => this.editMode()}>Edit Mode</button>
                        </div>
                        : null}
                        {this.state.editMode && id === Number(this.props.match.params.id) ?
                            <EditCampusForm id={id} name={name} address={address} description={description}/>
                        : null}
                    
                    <div className='campusheader'>
                        <h1>{name} {this.state.editMode ?
                        <button id='returnbutton' type='button' className='edit' onClick={() => this.editMode()}>Return to View Mode</button>
                        : null}</h1>
                     
                        <img src={imageUrl} />   
                    </div>
                 
                    <h2>Enrolled Students:</h2>
                    <div className='students'>
                
                        {(this.props.students.length || this.props.students.length > 0) ?
                        this.props.students.map(student => <SingleStudent deleteStudent={this.deleteStudent} key={student.id} student={student} />)
                        : 'No students enrolled here!'}
                    </div>
                </div>
            )
        } else return (
            <h1>The campus you are looking for does not exist!</h1>
        )
        
    }
    
}
const mapStateToProps = state => ({
    campus: state.campuses[0],
    students: state.campuses[1]
})
const mapDispatchToProps = dispatch => ({
    getCampus: (id) => dispatch(getSingleCampus(id))
})

const SingleCampusDetail = connect(mapStateToProps, mapDispatchToProps)(disconnectedSingleCampusDetail)
export default SingleCampusDetail;