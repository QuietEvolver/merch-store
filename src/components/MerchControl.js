import React from 'react';
import Header from './Header';
import { v4 } from 'uuid';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemFormShowing: false,
      itemList: [
        {
          item: 'Mag Harness 5000',
          manufacturer: 'Chickens Inc.',
          description: 'A sturdy harness with magnetic closures.',
          category: 'Harnesses',
          price: '24',
          quantity: '4',
          id: v4(),
        }
      ],
      selectedItem: null,
    };
  }

  getItemById = (id, list = this.state.itemList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleClickAddNewItem = () => {
    this.setState((prevState) => ({
      newItemFormShowing: !prevState.newItemFormShowing
    }))
  };
  
  handleChangingSelectedItem = (id) => {
    const newSelectedItem = this.getItemById(id);
    this.setState({selectedItem: newSelectedItem});
  }
  

  render() {
    return (
      <React.Fragment>
        <Header />
        {
          this.state.newItemFormShowing ?

          <div>new item form!</div> //if true > else do next line after : if false.
          : 
          <div>showing the merch list!</div> // if false
        }

        <button onClick={this.handleClickAddNewItem}>
          { this.state.newItemFormShowing ? 'cancel' : 'add new' }
        </button>

        {this.state.selectedItem !== null && <div>showing a details page!</div>}
      </React.Fragment>
    );
  }
}

export default MerchControl;