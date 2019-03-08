import React, {Component} from 'react';
const PaymentMode = function(props) {
    
        const paymentType = ['American Express', 'VISA', 'DBS PayLa'];
        const listItems = paymentType.map((type, index) =>
            <li className="list-group-item" key={index}>
                <label>
                    <input
                    value={type}
                    type="radio"
                    onChange={props.onChange}
                    name ='paymentType'/>{" "}
                    { type}
                </label>
          </li>
            );
        return ( <ul className="list-group">
            {listItems}
        </ul>

         );
}
 
export default PaymentMode;