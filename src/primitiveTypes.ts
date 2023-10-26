// string
let username: string = "username";

// number
let number: number = 32;

// boolean
let isUser: boolean = true;

console.log({ username, number, isUser });

// union of the types
let userId: string | number = 34; // this is called union of the types

console.log(userId);

/**
 * Grouping types
 */

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

/**
 * let user: {
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
 */
