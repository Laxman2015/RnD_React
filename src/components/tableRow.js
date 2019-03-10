import React from 'react';
const Row = function(props){
        return(
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.userNmae}</td>
                <td>{props.item.paymentMode}</td>
                <td>{props.item.amount}</td>                
            </tr>
        )
    
}
export default Row;