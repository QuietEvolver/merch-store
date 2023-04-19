import React from 'react';
import Header from './Header';
import MerchList from './MerchList';
import { v4 } from 'uuid';
import NewItemForm from './NewItemForm';
import ItemDetail from './ItemDetail';
import Modal from './Modal';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemFormShowing: false,
      itemList: [
        {
          name: 'Mag Harness 5000',
          manufacturer: 'Chickens Inc.',
          description: 'A sturdy harness with magnetic closures.',
          category: 'Harnesses',
          price: '24',
          quantity: '4',
          id: v4(),
        },
        {
          name: 'Velvet Claw Sheath (set of 2)',
          manufacturer: 'CluckCo',
          description: 'A luxurious covering for your pet\'s deadly claws.',
          category: 'Gloves',
          price: '125',
          quantity: '40',
          id: v4(),
        },
        {
          name: 'Chicken Pants',
          manufacturer: 'CluckCo',
          description: 'A one-size-fits-all solution to your chicken\'s rampant nudity.',
          category: 'Pants',
          price: '80',
          quantity: '200',
          id: v4(),
        },
      ],
      selectedItem: null,
    };
  }

  getItemById = (id, list = this.state.itemList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleClickBackToList = () => {
    this.setState(() => ({
      selectedItem: null,
    }));
  }

  handleBuyItem = (id) => {
    const newItemList = [...this.state.itemList];
    const depletedItem = this.getItemById(id, newItemList);
    depletedItem.quantity = parseInt(depletedItem.quantity - 1);
    this.setState({
      itemList: newItemList,
    });
  }

  handleRestockItem = (id) => {
    const newItemList = [...this.state.itemList];
    const restockedItem = this.getItemById(id, newItemList);
    restockedItem.quantity = parseInt(restockedItem.quantity + 1);
    this.setState({
      itemList: newItemList,
    });
  }

  handleDeleteItem = (id) => {
    const newItemList = [...this.state.itemList];
    const doomedItem = this.getItemById(id, newItemList);
    newItemList.splice(newItemList.indexOf(doomedItem), 1);
    this.setState({
      itemList: newItemList,
      selectedItem: null,
    });
  }

  handleClickAddNewItem = () => {
    this.setState(() => ({
      newItemFormShowing: true,
    }));
  };

  handleCancelAddingNewItem = () => {
    this.setState(() => ({
      newItemFormShowing: false,
    }));
  };

  handleChangingSelectedItem = (id) => {
    const newSelectedItem = this.getItemById(id);
    this.setState({ selectedItem: newSelectedItem });
  };

  handleAddingNewItem = (newItem) => {
    const newItemList = [...this.state.itemList];
    newItemList.push(newItem);
    this.setState({
      itemList: newItemList,
      newItemFormShowing: false,
    });
  }

  handleEditingItem = (newItem) => {
    console.log('handleEditingItem newItem', newItem)
    const newItemList = [...this.state.itemList];

    // delete old
    const doomedItem = this.
    getItemById(newItem.id, newItemList);
    newItemList.splice(newItemList.indexOf(doomedItem), 1);

    // add new with same ID
    newItemList.push(newItem);

    this.setState({
      itemList: newItemList,
    });
  }



  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={this.state.newItemFormShowing ? 'veiled' : ''}>
          {
            this.state.selectedItem === null ?
            <React.Fragment>
              <MerchList
                itemList={this.state.itemList} 
                handleChangingSelectedItem={this.handleChangingSelectedItem} 
              />
              <button className={this.state.newItemFormShowing || 'green'} onClick={this.handleClickAddNewItem}>
                Add new item
              </button>

              <Modal 
                showing={this.state.newItemFormShowing}
                headerText={'Add new item'}
                bodyComponent={<NewItemForm type='create' onClickAddItem={this.handleAddingNewItem} onCancelAddItem={this.handleCancelAddingNewItem} />}
              />

            </React.Fragment>
            :
            <ItemDetail 
              item={this.state.selectedItem} 
              onClickBackToList={this.handleClickBackToList}
              onClickBuy={this.handleBuyItem}
              onClickRestock={this.handleRestockItem}
              onClickDelete={this.handleDeleteItem}
              onClickEdit={this.handleEditingItem}
            />
          }  
        </main>
      </React.Fragment>
    );
  }
}

export default MerchControl;