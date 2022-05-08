type $Record = { id: string; name: string; email: string; phone: string };

interface Store {
  [value: string]: {
    [id: string]: $Record;
  };
}

class DB {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  loadData(storeName: string, id: string): $Record {
    return this.store[storeName][id];
  }
}

export { DB, Store, $Record };
