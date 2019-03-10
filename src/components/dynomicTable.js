import React from 'react';
import Row from './tableRow';
const Table = function(props){
console.log('tableprops', props)
    const row = props.tableData.map((item)=>{
        return( 
            <Row key={item.id} item={item}/>
        )
    })
    console.log(row);
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