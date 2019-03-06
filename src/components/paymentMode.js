import React, {Component} from 'react';
class paymentMode extends Component {
    state = {  }
    render() {
        const paymentType = ['American Express', 'VISA', 'DBS PayLa'];
        const listItems = paymentType.map((type, index) =>
            <li className="list-group-item" key={index}><label>
                    <input
                    defaultValue={type}
                    type="radio"
                    ref={this.input}
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
}
 
export default paymentMode;