import { createContext, useState, useContext, ReactElement, ReactNode } from 'react';
import { Item, ItemContextState } from '../interfaces';
// import { getRandom } from '../utils/helpers';
import { nanoid } from 'nanoid'; // TODO: DELETE HERE IF IT IS NOT NECESSARY

interface Props {
  children: ReactNode;
}

// set default values for initializing
const contextDefaultValues: ItemContextState = {
  Items: [{ id: '1', value: 'test' }],
  addItem: function (): void {
    throw new Error('Function not implemented.');
  },
  removeItem: function (): void {
    throw new Error('Function not implemented.');
  },
  removeAll: function (): void {
    throw new Error('Function not implemented.');
  },
  updateItem: function (): void {
    throw new Error('Function not implemented.');
  },
};

// created context with default values
const ItemContext = createContext<ItemContextState>(contextDefaultValues);

export const ItemProvider = ({ children }: Props): ReactElement => {
  // set default values
  const [Items, setItems] = useState<Item[]>(contextDefaultValues.Items);

  const addItem = (newItem: Item) =>
    // add item with new id generated
    setItems((Items) => [...Items, { ...newItem, id: nanoid() }]);

  // remove item by using id value
  const removeItem = (id: string) => {
    const data = Items;

    // find the item's index to remove it
    const index = data.findIndex((Item) => Item.id === id);

    // to check if the item exist in the list
    if (index < 0) {
      alert('No item found in the list');
      return;
    }

    // splice value found in the index
    data.splice(index, 1);

    // data list will be changed because we are editing on the reference. Therefore, it is enough
    // to spread data values
    setItems([...data]);
  };

  // Firstly, check if there any value exists in the list.
  // If does exist, set item list to an empty array otherwise, give alert to inform user.
  const removeAll = () =>
    Items.length === 0 ? alert('There are no tasks found in the list!') : setItems([]);

  // Update item with id and item values.
  const updateItem = (id: string, item: Item) => {
    const data = Items;
    const index = data.findIndex((Item) => Item.id === id);
    data[index] = item;
    setItems([...data]);
  };

  const values = {
    Items,
    addItem,
    removeItem,
    removeAll,
    updateItem,
  };

  // add values to provider to reach them out from another component
  return <ItemContext.Provider value={values}>{children}</ItemContext.Provider>;
};

// created custom hook
export const useItem = () => useContext(ItemContext);
