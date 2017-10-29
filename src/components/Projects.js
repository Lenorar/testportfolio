import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import projectData from './project-data';
import { Redirect } from 'react-router-dom';

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            projects: projectData 
        }
    }

    renderProjects(array){
        return array.map(project =>{
            console.log(project.images[0])
            let projectPage = `/projects/${project.id}`;
            console.log(project.id)

            let pathProject = `/projects/${project.id}`;
            
            return (
                <div className="">
                   <div className="project">                     
                    <a href={pathProject}>
                      <div className="project-item">
                        <h2>{project.title}</h2>
                        <p className="description-homepage">{project.abstract}</p>
                        <img className="profile" src={project.images[0]} />
                        <h3>{project.year}</h3>
                    </div>
                    </a>
                </div>
            </div> 
            )
        })
    }

    render(){
        let pathSubject='/projects/' + this.props.match.params.id
        return(
            <div className='body projects-homepage clearfix'>
                <div >
                    {this.renderProjects(this.state.projects)}
                </div>
            </div>
        )
    }
}

export default Projects;

