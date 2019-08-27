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
        const {name, imageUrl} = this.props.campus;
        // console.log(this.props)
        return (
            <div>
                <h3>{name}</h3>
                <img src={imageUrl} />
                <h4>Enrolled Students:</h4>
                {(this.props.students.length || this.props.students.length > 0) ?
                 this.props.students.map(student => <SingleStudent key={student.id} student={student} />)
                : 'no students here!'}
           
            </div>
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