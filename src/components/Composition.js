import React, { Component } from 'react';

class Composition extends Component {
    render() {
        return (
            <div>
                <h2>Hello</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Composition;