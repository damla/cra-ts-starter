export interface Item {
  id: string;
  value: string;
}

export type Items = Item[];

export interface ItemContextState {
  Items: Items;
  addItem: (newItem: Item) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateItem: (id: string, data: Item) => void;
}
