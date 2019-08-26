import React from 'react'

const SingleCampus = props => {
    const {name, imageUrl} = props.campus;
    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} />
        </div>
    )
}

export default SingleCampus