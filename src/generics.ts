// using generics in the code
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const dataStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  }
};

// using generics with functions
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b
  };
}
