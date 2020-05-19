import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Project from './Project'

const ProjectList = props => {
    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/projects')
            .then(res => {
                console.log(res)
                setProjectList(res.data)
            })
            .catch(err => console.log('Error: ', err))
    }, [])

    return (
        <div>
            {projectList.map(projectData => {
                return (
                    <Project
                        key={projectData.id}
                        description={projectData.description}
                        notes={projectData.notes}
                    />
                )
            })}
        </div>
    )
}

export default ProjectList