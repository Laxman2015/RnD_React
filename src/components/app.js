import React, { Component } from 'react';
import PaymentMode from './paymentMode';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md">
          One of three columns
        </div>
        <div className="col-md">
         <PaymentMode />
        </div>
        <div className="col-md">
          One of three columns
        </div>
        <div className="col-md">
          One of three columns
        </div>
      </div>
    </div>
    );
  }
}
