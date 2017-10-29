import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import WebDevelopment from './components/WebDevelopment.js';
import About from './components/About.js'
import WebFont from 'webfontloader';
import SubNav from './components/SubNav.js'
import Project from './components/Project.js'
import Projects from './components/Projects.js'

WebFont.load({
  google: {
    families: ['Source Sans Pro:300,400,700', 'sans-serif']
  }
});
export default (
  <BrowserRouter>
    <div>
      <Route path='/' component={Nav}/>    
      <Route exact path='/' component={About}/>        
      <Route exact path='/webdevelopment' component={WebDevelopment}/>        

      <Route path='/projects/:id' component={SubNav}/>    
      <Route exact path ='/projects' component={Projects}/>

      <Route exact path='/projects/:id' component={Project}/>    

    </div>
  </BrowserRouter>
)