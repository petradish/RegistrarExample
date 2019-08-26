import React from 'react'
import {connect} from 'react-redux'
import {getCampuses} from '../reducers/campusReducer'
import SingleCampus from './SingleCampus'

class disconnectedAllCampuses extends React.Component {
    componentDidMount(){
        this.props.getAllCampuses()
    }
    render(){
        return(
            <div className='campuses'>
                <h2 className='campus-title'>All Campuses</h2>
                <div className='campus-container'>
                    {console.log(this.props.campuses)}
                    {this.props.campuses.map(campus => <SingleCampus key={campus.id} campus={campus} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    campuses: state.campuses,
})
const mapDispatchToProps = dispatch => ({
    getAllCampuses: () => dispatch(getCampuses())
})

const AllCampuses = connect(mapStateToProps, mapDispatchToProps)(disconnectedAllCampuses)
export default AllCampuses;