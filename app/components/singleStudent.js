import React from 'react'
import {Link} from 'react-router-dom'


const SingleStudent = props => {
    const {id, firstName, lastName, imageUrl} = props.student;
    return (
        <div>
            
            <Link to={`/students/${id}`}> 
            <h3>{firstName} {lastName}</h3> </Link>
            <img src={imageUrl} />

        </div>
    )
}

export default SingleStudent