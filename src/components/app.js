import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
            Post New Data
            </Link>
            <Link className="btn btn-primary" to="/posts">
            Posts Data
            </Link>
        </div>
      </div>
    );
  }
}
