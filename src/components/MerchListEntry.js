
function MerchListEntry(props) {
  return (
    <div className='item-list-entry'>
      <div>{props.item.name}</div>
      <div>Manufacturer: {props.item.manufacturer}</div>
      <div>{props.item.description}</div>
      <div>Category: {props.item.category}</div>
      <div>Price: ${props.item.price}</div>
      <div>Quantity: {props.item.quantity}</div>
      <div>{props.item.id}</div>
    </div>
  );
}

export default MerchListEntry;
