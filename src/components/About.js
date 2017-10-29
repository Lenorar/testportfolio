import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class About extends Component {
    render(){
        return(
            <div className="body clearfix">
                <div className='intro '>
                    <div>
                        <h1 className="website-title">Lenora Rigoni</h1>
                        <p className="website-title"> I am a multi-disciplinary designer with web development experience living in New York City. From sketching to writing Javascript, I like to make usable things with progressive tools. I have worked on projects in web design, brand identity, application design, web development, creative direction, social media content and more.</p>
                        <div className="person-links">
                            <span><a target="_blank" href="https://www.linkedin.com/in/lenorarigoni/">linkedin</a></span>
                            <span><a target="_blank" href="https://github.com/Lenorar">github</a></span>
                            <span><a target="_blank" href="https://www.instagram.com/len_til/">instagram</a></span>
                        </div>                          
                    </div>
                    
                    <div className="my-toolkit clearfix">
                        <div className="toolkit-item">
                            <h2>Design</h2>
                            <p>Adobe Creative Suite, Sketch, SketchUp, Invision, Digital Photography, Film Photography, Silkscreen</p>
                        </div>
                        <div className="toolkit-item">
                            <h2>Web Development</h2>
                            <p>React, Node.js, Express, Ruby on Rails, PosgreSQL, Github, Javascript, Jquery, CSS, Sass</p>
                        </div>
                    </div>
                </div>


                <div className="human-timeline clearfix">
                    <h1>Human Experience</h1>
                    <div className="timeline-item" onClick={this.renderImage}>
                        <h2>1990</h2>
                        <p>Born at Saint Vincent’s Hospital in NYC at 9:40pm. <br></br><br></br>Weighed in at 7 lbs. 3 ozs.</p>
                    </div>
                    <div>                     
                    <div className="timeline-item">
                        <h2>1996</h2>
                        <p>My mom told me <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_people_diagnosed_with_dyslexia">dyslexia</a> was my super power. <br></br> <br></br> I still believe her.</p>    
                    </div>
                    </div>
                    <div className="timeline-item">
                        <h2>2000</h2>
                        <p>Doodled and danced tap and ballet through middle and high school <br></br><br></br>I like <a target="_blank"href="https://www.youtube.com/watch?v=9bXWWz5Tv_I">this</a> a lot.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2009</h2>
                        <p>8 hour car trip to Ohio where I would spend the next four years at Oberlin College.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2011</h2>
                        <p>Studied in Rome and Florence, where I learned textile design, the beauty of <a target="_blank" href="https://en.wikipedia.org/wiki/Primavera_(painting)#/media/File:Botticelli-primavera.jpg">Botticelli</a>, and ate gelato daily.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2012</h2>
                        <p>Became mildly obsessed with the <a target="_blank" href="https://www.bauhaus100.de/en/past/works/education/manifest-und-programm-des-staatlichen-bauhauses/">Bauhaus Movement</a>.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2013</h2>
                        <p>Received a 25 dollar leather bound diploma for double majoring in Art History and Studio Art.<br></br> <br></br>Article on my <a target="_blank" href="https://oberlinreview.org/1821/arts/classic-craftsmanship-reimagined-in-permutable/">thesis</a>.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2014</h2>
                        <p>Started doing the agency thing.</p><p>Learned a whole bunch.</p><p><a target="_blank" href ="https://www.youtube.com/watch?v=NSrVKVGBAcE">This</a> is my favorite advertisement.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2015</h2>
                        <p>UX and web development interest got the best of me.</p>
                    </div>
                    <div className="timeline-item">
                        <h2>2017</h2>
                        <p>Went to General Assembly’s Web Design Immersive where I focused on full stack development.</p><p>Got really into <a href="http://www.codepuns.com/">coding puns.</a></p>
                    </div>
                    <div className="timeline-item">
                        <h2>Now</h2>
                        <p>I am always looking to work on new and exciting projects.</p><p>Please get in touch!</p>
                    </div>
                </div>

            </div>
        )
      }
    }

  export default About;

