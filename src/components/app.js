import React, {Component} from 'react';

import Course from './course';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      Lession:'Course List ',
      courses:["course r1", "course r2", "course r3", "course r4"]
    }
  }
  render(){
    return(
      <div><h1>{this.state.Lession}</h1> 
      <Course courses = {this.state.courses} />
      </div>

    )
  }
};

