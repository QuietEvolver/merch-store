import React from 'react';
import PropTypes from "prop-types";
import Modal from "./Modal";
import NewItemForm from './NewItemForm';

class ItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      editModalShowing: false,
      deleteConfirmModalShowing: false,
    }
  }

  showEditModal() {
    this.setState(() => ({
      editModalShowing: true,
    }));
  }

  hideEditModal() {
    this.setState(() => ({
      editModalShowing: false,
    }));
  }

  // handler to pass to NewItemForm
  
  render() {
    return (
      <div className='item-details-card'>

        <Modal 
          showing={this.state.editModalShowing} 
          headerText="Edit modal" 
          bodyComponent={<NewItemForm editingItem={this.props.item} type='edit' onClickAddItem={this.props.onClickEdit} onCancelAddItem={() => this.hideEditModal()} />}
        />

        <div className='item-attribute-list'>
          <h1>{this.props.item.name}</h1>
          <div>Manufacturer: {this.props.item.manufacturer}</div>
          <div>{this.props.item.description}</div>
          <div>Category: {this.props.item.category}</div>
          <div>Price: ${this.props.item.price}</div>
          <div>Quantity: {this.props.item.quantity}</div>
          <div>{this.props.item.id}</div>
        </div>
        <div className="details-button-area">
          <button onClick={this.props.onClickBackToList}>Back to list</button>
          <button onClick={() => this.showEditModal()} className='yellow'>Edit</button>
          <button onClick={() => this.props.onClickDelete(this.props.item.id)} className='red'>Delete</button>
          <button disabled={this.props.item.quantity === 0} onClick={() => this.props.onClickBuy(this.props.item.id)} className='green'>Buy</button>
          <button onClick={() => this.props.onClickRestock(this.props.item.id)} className='orange'>Restock</button>
        </div>
      </div>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickBackToList: PropTypes.func,
  onClickBuy: PropTypes.func,
  onClickRestock: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
};

export default ItemDetail;