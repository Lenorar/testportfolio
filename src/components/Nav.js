import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import WebDevelopment from '../components/WebDevelopment.js'
import Projects from '../components/Projects.js'
import About from '../components/About.js'

class Nav extends Component {
    
    render(){
        let WebDevelopment='/webdevelopment'
        let Projects='/projects'
        let About='/'
        
        return(
                <div className='nav'>
                    <Link to={About}><p className="nav-item website-title-nav">L.R.</p></Link>
                    <Link to={WebDevelopment}><p className="nav-item">web development</p></Link>
                    <Link to={Projects}><p className="nav-item">design</p></Link>
                    <Link to={About}><p className="nav-item">about</p></Link>
                </div>
        )
      }
    }

  export default Nav;

