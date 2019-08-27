import React from 'react'
import {Link} from 'react-router-dom'

const SingleCampus = props => {
    const {name, imageUrl, id} = props.campus;
    return (
        <div>
             <Link to={`/campuses/${id}`}> <h3>{name}</h3> </Link>
            <img src={imageUrl} />
        </div>
    )
}

export default SingleCampus