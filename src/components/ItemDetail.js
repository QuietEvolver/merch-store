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
        <button className='red'>Delete</button>
        <button className='green'>Buy</button>
        <button className='orange'>Restock</button>
      </div>
    </div>
  );
}

export default ItemDetail;