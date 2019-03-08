import React from 'react';
const Row = function(props){
    //const row = props.rowdata.map((item)=>{})
    if(props){
        return(
            <tr>
                <td>{props.rowdata.id}</td>
                
            </tr>
           )
    }
    
}
export default Row;