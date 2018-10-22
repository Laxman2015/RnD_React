import React, {Component} from 'react';

const Course = (props) => { 
        if(!props.courses){
          return;
        }
        var courcsList=props.courses.courses;  
        return(
           courcsList.map(function(item){
                return <li className="list-group-item" key={item.id}>{item.course}</li>;
           })
        )
    
  }

export default Course;  