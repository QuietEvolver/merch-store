import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>Merch Store</h1>
      <div className='header-button-area'>
        {props.buttonAreaComponent}
      </div>
    </header>
  );
}

Header.propTypes = {
  buttonAreaComponent: PropTypes.object,
};

export default Header;