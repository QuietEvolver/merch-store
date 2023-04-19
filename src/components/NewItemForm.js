import React from "react";
import { v4 } from "uuid";  
import PropTypes from "prop-types";


function NewItemForm(props) {

  function handleNewItemFormSubmission(e) {
    e.preventDefault();
    console.log("e.target", e.target);
    props.onClickAddItem({
      name: e.target.name.value,
      manufacturer: e.target.manufacturer.value,
      description: e.target.description.value,
      category: e.target.category.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: v4(),
    });
  }
  
  return (
    <form onSubmit={handleNewItemFormSubmission}>
      <div className="form-row">
        <label for="name">Item name</label>
        <input name="name" type="text" />
      </div>
      <div className="form-row">
        <label for="manufacturer">Manufacturer</label>
        <input name="manufacturer" type="text" />
      </div>
      <div className="form-row">
        <label for="description">Description</label>
        <textarea name="description" type="text" />
      </div>
      <div className="form-row">
        <label for="category">Category</label>
        <input name="category" type="text" />
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input name="price" type="text" />
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input name="quantity" type="text" />
      </div>
      <button className='green'>Save</button>
    </form>
  );
}

NewItemForm.prototype = {
  onClickAddItem: PropTypes.func
}

export default NewItemForm;
