import React from 'react'

const SingleStudent = props => {
    const {firstName, lastName, imageUrl} = props.student;
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <img src={imageUrl} />
        </div>
    )
}

export default SingleStudent