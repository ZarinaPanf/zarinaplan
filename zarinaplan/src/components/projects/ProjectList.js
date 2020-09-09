import React from 'react';
import ProjectSummary from './ProjectSummary.js';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {

    return (
        <div className="project-list section">
            {projects ? projects.map(project => {
                return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                )
            }) :
                <div className="container center">
                    <h6>Loading...</h6>
                </div>
            }
        </div>
    )
}

export default ProjectList;
