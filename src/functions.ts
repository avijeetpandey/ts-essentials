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
