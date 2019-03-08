import React, {Component} from 'react';
const SelectUser = function(props) {
      return (
          <label>
            Pick your favorite flavor:
            <select value={props.selectUser} onChange={props.onChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>         
      );
  }
  export default SelectUser;