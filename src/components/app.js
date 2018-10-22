import React, { Component } from 'react';
import axios from 'axios';

import Course from './Course';
import Composition from './Composition';
import Composition2 from './Composition2';
import Hocapp from './Hocapp';
import { ContextExp } from './ContextExp';

export default class App extends Component {
  state = {
    lession: 'Course List ',
    courses: { courses: [] }
  }
  componentDidMount() {
    axios.get('http://localhost:8082/syaHello')
      .then((res, rej) => {
        console.log(res.data);
        this.setState({ courses: res.data })
      })
  }
  handleChange(event) {
    this.setState({lession: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.lession);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.state.Lession}</h1>
        <Composition>
          <h2>{this.state.Lession}</h2>
          <ul className="list-group">
            <Course courses={this.state.courses} />
          </ul>
        </Composition>
        <Composition2 />

        <div>
          Ha ha ha
        <Hocapp name='anil' />
        </div>

        <div>
          Context
          <ContextExp />
        </div>



        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.lession} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


      </div>


    )
  }
};

