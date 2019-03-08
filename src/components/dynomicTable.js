import React from 'react';
import Row from './tableRow';
const Table = function(props){

    const row = props.datas.map((item)=>{
        <tr>
            <td>{item.id}</td>
            <td>{item.userNmae}</td>
            <td>{item.paymentMode}</td>
            <td>{item.amount}</td>
        </tr>
    })
    
    return(
        <table className="table">
            <thead>
                <tr>
                <th>Transaction Id</th>
                <th>User Name</th>
                <th>Payment Mode</th>
                <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    )
}
export default Table;