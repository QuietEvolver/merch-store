
function NewItemForm(props) {
  return (
    <form>
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
        <input name="description" type="text" />
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
    </form>
  );
}

export default NewItemForm;
