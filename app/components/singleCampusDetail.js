import React from 'react'
import {connect} from 'react-redux'
import { getSingleCampus } from '../reducers/campusReducer';
import SingleStudent from './singleStudent';

class disconnectedSingleCampusDetail extends React.Component {
    componentDidMount(){
        const campusId = this.props.match.params.id
        this.props.getCampus(campusId)
    }
    render(){
        if (this.props.campus) {
            const {name, imageUrl} = this.props.campus;
       
            return (
                <div className='campusdetail'>
                    <h1>{name}</h1>
                    <div className='campus-container'>
                        <div>
                            <img src={imageUrl} />
                        </div>
                        <h3>Enrolled Students:</h3>
                    </div>
                    
                    
                    <div className='students'>
                        
                        {(this.props.students.length || this.props.students.length > 0) ?
                     this.props.students.map(student => <SingleStudent key={student.id} student={student} />)
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