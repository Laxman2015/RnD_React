import React, { Component } from 'react';

const withClock = (Component1) => {
    return class Hoc extends Component{
        state={
            time: Date.parse(new Date)
        }
        time(){
            return (new Date(this.state.time)).toLocaleTimeString();
        }
        render(){
            return <Component1 {...this.props} time={this.time()} />;
        }
    }
}  
export default withClock;

