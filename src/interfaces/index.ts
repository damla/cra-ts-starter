export interface Item {
  id: string;
  value: string;
}

export interface ItemContextState {
  Items: Item[];
  addItem: () => void;
  removeItem: () => void;
  removeAll: () => void;
  updateItem: () => void;
}
