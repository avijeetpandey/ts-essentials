## Notes for the course

### Defining variables with types using typescript

```ts
const name: string = "name";
const isUser: boolean = true;
```

### Declaring or grouping types

```ts
// first way of grouping types
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
  hobbies: Array<string>;
  roles: string[]; // another way of defining array types
  cellNumbers: number[];
};
```

```ts
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
} = {
  name: "A",
  age: 32,
  isAdmin: true,
  id: 232
};
```

### Making functions with typed parameters and return types

```ts
// function with typed parameters and return value
function add(a: number, b: number): number {
  return a + b;
}

// function type that returns nothing
function addNothing(): void {
  console.log("Returns nothing");
}

// custom types or type alias using typescript
type CalculateCallback = (a: number, b: number) => number;

// types for function with having function as a parameter
function calculate(
  a: number,
  b: number,
  calcFunc: (a: number, b: number) => number
) {
  // calling function inside
  calcFunc(a, b);
}

// types for function with having function as a parameter
function calculateWithTypeForCallback(
  a: number,
  b: number,
  calcFunc: CalculateCallback
) {
  // calling function inside
  calcFunc(a, b);
}
```

### Using generics in typescript

```ts
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
```

### Creating Interfaces

```ts
interface Credentials {
  email: string;
  password: string;
}

const creds: Credentials = {
  email: "test@abc.com",
  password: "test"
};

// An interface can be adhered to a class so that it implements all the specified properties
// Interfaces are mostly used while creating objects
class AuthCredentials implements Credentials {
  email: string;
  password: string;

  constructor() {
    this.email = "hello@g.cc";
    this.password = "test@123";
  }
}
```

### Interface union

```ts
// the same can be achieved using union as well
interface IUser {
  name: string;
  id: number | string;
  hobbies: Array<string>;
}

interface IDashBoardUser {
  roles: Array<string>;
}

// union using interfaces
interface IAdminUser extends IUser, IDashBoardUser {}
```

### Types union

```ts
// union of two types
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser; // union of two types
```
