import React, {Component} from 'react';

const Course = (props) => {    
        return(
           props.courses.map(function(item){
                return <li key={item}>{item}</li>;
           })
        )
    
  }

export default Course;