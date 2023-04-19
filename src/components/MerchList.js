import React from "react";
import PropTypes from "prop-types";

function MerchList(props) {
  console.log('MerchList props', props)
  return (
    <React.Fragment>
      <h2>Item List:</h2>
      {props.itemList.map(item =>
      <div className='item-list-entry'>
        <div>{item.name}</div>
        <div>{item.manufacturer}</div>
        <div>{item.description}</div>
        <div>Category: {item.category}</div>
        <div>Price: ${item.price}</div>
        <div>Quantity: {item.quantity}</div>
        <div>{item.id}</div>
      </div>
      )}
    </React.Fragment>
  );
}



export default MerchList;
