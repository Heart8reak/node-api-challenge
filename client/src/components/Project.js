import React from 'react'


const Project = props => {
    // const { name, description } = props.project

    return (
        <div>
            <h3>Name: </h3><span>{props.description}</span>
            <p>Description: {props.notes}</p>
            <hr />
        </div>
    )
}

export default Project