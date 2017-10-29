
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render(){
        const img = require('../images/githubicon.svg');
        return(
            <div className="body projects-homepage clearfix">
                <div className="project">                     
                    <a href="https://blooming-escarpment-41504.herokuapp.com/">
                      <div className="project-item">
                        <h2>Photography Collection</h2>
                        <p className="description">Full CRUD application where users can collect and discover photographer’s work.</p>
                        <img className="profile" src="http://res.cloudinary.com/doez5fa8j/image/upload/v1508383298/photography-collection_ntyk2m.png" />
                        <h3>React, Ruby on Rails, PostgeSQL, database creation, CSS, Javascript</h3>
                        <a href="https://github.com/Lenorar/photography-collection-back-end"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>
                <div className="project">                     
                    <a href="http://www.maxweinman.com/">
                      <div className="project-item">
                        <h2>Max Weinman Portfolio</h2>
                        <p className="description">Bespoke website showcasing Max Weinman's films and photography.</p>
                        <img className="profile" src="http://res.cloudinary.com/doez5fa8j/image/upload/v1508383269/maxweinman-website_b5yxa3.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        <a href="https://github.com/Lenorar/MaxWeinmanFilm"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a href="https://afternoon-fortress-39799.herokuapp.com/">
                      <div className="project-item">
                        <h2>User Dictionary</h2>
                        <p className="description">Full CRUD application for users to lookup words and store for memorization purposes.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1508383342/user-dictionary-website_qwbged.png" />
                        <h3>Node.js, Express, Javascript, CSS, Sketch, User Auth</h3>
                        <a href="https://github.com/Lenorar/user-dictionary-website  "><img className="github" src={img}/> </a> 

                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a href="https://git.generalassemb.ly/pages/lenorarigoni/hue-select-game/">
                      <div className="project-item">
                        <h2>Hue Select</h2>
                        <p className="description">Time based game for users to test their hexadecimal matching ability.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1508383403/hue-select-website_jtw1sy.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        <a href="https://github.com/Lenorar/hue-select-game"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a href="http://offkilterceramics.com/">
                      <div  className="project-item">
                        <h2>Offkilter Ceramic</h2>
                        <p className="description">Personal website for my ceramics studio, based in brooklyn.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1508383434/offkilter-website_v6keuy.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        <a href="#"><img className="github" src={img}/></a> 
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a href="https://infinite-eyrie-11286.herokuapp.com/">
                      <div className="project-item">
                        <h2>Medi-flash</h2>
                        <p className="description">Full CRUD application for medical students to create flashcards, made through Merriam-Webster Medical Dictionary API or their own definitions, to better study. </p>
                        <img  className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1508383459/medi-flash-website_kgeass.png" />
                        <h3>React, Node.js, Express, Javascript, CSS</h3>
                        <a href="https://github.com/Dichora2"><img className="github" src={img}/></a> 
                    </div>
                    </a>
                </div>
            </div>
        )
      }
    }

  export default About;

