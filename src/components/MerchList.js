import React from "react";
import MerchListEntry from "./MerchListEntry";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <h2>Item List:</h2>
      <div className='item-list'>
        {props.itemList.map(item =>
          <MerchListEntry
            onClickViewDetails={props.handleChangingSelectedItem}
            key={item.id}
            item={item}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default MerchList;
