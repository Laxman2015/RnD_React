import React, { Component } from 'react';
import { FamilyConsumer } from './ContextExp';

class Child extends Component {
    render() {
        return (
            <div>Ha ha
                <FamilyConsumer>{(context) => <p>{context}</p>}</FamilyConsumer>
            </div>
        );
    }
}

export default Child;