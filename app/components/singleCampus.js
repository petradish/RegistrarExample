import React from 'react'
import {Link} from 'react-router-dom'
import { deleteCampus } from '../reducers/campusReducer';
import { connect } from 'react-redux'

const disconnectedSingleCampus = props => {
    const {name, imageUrl, id} = props.campus;
    return (
        <div>
             <Link className='link' to={`/campuses/${id}`}> <h3>{name}</h3> </Link>
             <button type='button' onClick={() => props.deleteCampus(id)}>X</button>
            <img src={imageUrl} />
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteCampus: (id) => dispatch(deleteCampus(id))
})
const SingleCampus = connect(null, mapDispatchToProps)(disconnectedSingleCampus)
export default SingleCampus