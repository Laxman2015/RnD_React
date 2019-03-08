import React, { Component } from 'react';
import PaymentMode from './paymentMode';
import SelectUser from './selectUser';
import Table from './dynomicTable';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      id:1,
      userNmae:'xyz',
      paymentMode:'American Express',
      amount:100,
      data:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.transfer = this.transfer.bind(this);
  }
  handleChange(event) {
    this.setState({userNmae: event.target.value});
  }
  handleAmountChange(event) {
    this.setState({amount: event.target.value});
  }
  handleRadioChange(event){
    this.setState({paymentMode: event.target.value});
  }
  transfer(event){
    const data = {id: this.state.id,
                  userNmae:this.state.userNmae,
                  paymentMode:this.state.paymentMode,
                  amount:this.state.amount
                 }
    this.setState({data: [...this.state.data, data]});
    this.setState({id: this.state.id + 1});
    console.log(this.state.data)
  }
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md">
          <SelectUser onChange={this.handleChange} selectValue={this.state.userNmae}/>
        </div>
        <div className="col-md">
         <PaymentMode onChange={this.handleRadioChange}/>
        </div>
        <div className="col-md">
          <input type="text" onChange = {this.handleAmountChange} value={this.state.amount}></input>
        </div>
        <div className="col-md">
          <button className="btn btn-primary" onClick={this.transfer}>Transfer</button>
        </div>
      </div>

      <div>
        <Table datas={this.state.data} />
      </div>
    </div>
    );
  }
}
