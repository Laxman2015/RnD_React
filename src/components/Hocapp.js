import React, { Component } from 'react';
import withClock from './Hoc'

class Hocapp extends Component {
    render() {
        return (
            <div>
                <div>The Time is : ${this.props.time} </div>
                <div>The Time is : ${this.props.name} </div>
            </div>
        );
    }
}

export default withClock(Hocapp);