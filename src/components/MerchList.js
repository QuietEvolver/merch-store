import React from "react";
import MerchListEntry from "./MerchListEntry";
import PropTypes from "prop-types";

function MerchList(props) {
  console.log('MerchList props', props)
  return (
    <React.Fragment>
      <h2>Item List:</h2>
      <div className='item-list'>
        {props.itemList.map(item =>
          <MerchListEntry
            key={item.id}
            item={item}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default MerchList;
