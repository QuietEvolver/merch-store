import PropTypes from "prop-types";

function ItemDetail(props) {

  return (
    <div className='item-details-card'>
      <div className='item-attribute-list'>
        <h1>{props.item.name}</h1>
        <div>Manufacturer: {props.item.manufacturer}</div>
        <div>{props.item.description}</div>
        <div>Category: {props.item.category}</div>
        <div>Price: ${props.item.price}</div>
        <div>Quantity: {props.item.quantity}</div>
        <div>{props.item.id}</div>
      </div>
      <div className="details-button-area">
        <button onClick={props.onClickBackToList}>Back to list</button>
        <button className='yellow'>Edit</button>
        <button onClick={() => props.onClickDelete(props.item.id)} className='red'>Delete</button>
        <button disabled={props.item.quantity === 0} onClick={() => props.onClickBuy(props.item.id)} className='green'>Buy</button>
        <button onClick={() => props.onClickRestock(props.item.id)} className='orange'>Restock</button>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickBackToList: PropTypes.func,
  onClickBuy: PropTypes.func,
  onClickRestock: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default ItemDetail;