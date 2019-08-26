import React from 'react'
import {connect} from 'react-redux'
import {getStudents} from '../reducers/studentReducer'
import SingleStudent from './singleStudent'

class disconnectedAllStudents extends React.Component {
  componentDidMount(){
      this.props.getAllStudents()
  }
  render(){
      return(
          <div className='students'>
              <h2 className='student-title'>All Students</h2>
              <div className='student-container'>
                  {this.props.students.map(student => <SingleStudent key={student.id} student={student} />)}
              </div>
          </div>
      )
  }
}

const mapStateToProps = state => ({
  students: state.students,
})
const mapDispatchToProps = dispatch => ({
  getAllStudents: () => dispatch(getStudents())
})

const AllStudents = connect(mapStateToProps, mapDispatchToProps)(disconnectedAllStudents)
export default AllStudents;
