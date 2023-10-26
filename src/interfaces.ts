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

// creating new object
const authCreds = new AuthCredentials();

console.log(authCreds.email);
console.log(authCreds.password);

// another example
function login(creds: Credentials) {
  console.log(creds.email);
  console.log(creds.password);
}

login(new AuthCredentials());

// union of two types
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser; // union of two types
