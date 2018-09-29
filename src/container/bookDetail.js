import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.activeBook){
      return <div> Please select a book</div>
    }
    return(
      <div><H2>Detail Books</H2>
      {this.props.activeBook.title}</div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.ActiveBook
  }
}
export default connect(mapStateToProps)(BookDetail);