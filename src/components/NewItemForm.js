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

  function handleEditItemFormSubmission(e) {
    e.preventDefault();
    props.onClickAddItem({
      name: e.target.name.value || e.target.name.placeholder,
      manufacturer: e.target.manufacturer.value || e.target.manufacturer.placeholder,
      description: e.target.description.value || e.target.description.placeholder,
      category: e.target.category.value || e.target.category.placeholder,
      price: e.target.price.value || e.target.price.placeholder,
      quantity: e.target.quantity.value || e.target.quantity.placeholder,
      id: props.editingItem.id,
    });
    props.returnToList();
  }
  
  return (
    <form onSubmit={props.type === 'create' ? handleNewItemFormSubmission : handleEditItemFormSubmission}>
      <div className="form-row">
        <label for="name">Item name</label>
        <input placeholder={props.editingItem && props.editingItem.name} name="name" type="text" />
      </div>
      <div className="form-row">
        <label for="manufacturer">Manufacturer</label>
        <input placeholder={props.editingItem && props.editingItem.manufacturer} name="manufacturer" type="text" />
      </div>
      <div className="form-row">
        <label for="description">Description</label>
        <textarea placeholder={props.editingItem && props.editingItem.description} name="description" type="text" />
      </div>
      <div className="form-row">
        <label for="category">Category</label>
        <input placeholder={props.editingItem && props.editingItem.category} name="category" type="text" />
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input placeholder={props.editingItem && props.editingItem.price} name="price" type="number" />
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input placeholder={props.editingItem && props.editingItem.quantity} name="quantity" type="number" />
      </div>
      <div className="form-row buttons">
        <button type="submit" className='green'>Save</button>
        <button onClick={props.onCancelAddItem} type='button'>Exit without saving</button>
      </div>
    </form>
  );
}

NewItemForm.propType = {
  onClickAddItem: PropTypes.func,
  onCancelAddItem: PropTypes.func,
  type: PropTypes.string,
  editingItem: PropTypes.object,
  returnToList: PropTypes.func,
}

export default NewItemForm;
