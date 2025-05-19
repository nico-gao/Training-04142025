// explicit type annotation
let num: number = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// array
let numberArr: number[] = [1, 2, 3];

// object

// anonymous, inline
let person: { name: string; id: number } = {
  name: "alice",
  id: 1,
};

// function

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

// type alias

// union type
type Person = { name: string; id: number | string; studentId?: number };

let person2: Person = {
  name: "bob",
  id: "2",
  studentId: 3,
};
type Direction = "north" | "south" | "east" | "west";
// interface
interface IPerson {
  name: string;
  id: number;
  direction: Direction;
}

let person3: IPerson = {
  name: "charlie",
  id: 4,
  direction: "north",
};

// literal type
// type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// type alias
// for primitive types
// no declaration merging
// can extend (&)

// interface
// for objects
// can do declaration merging
// can extend (extends keyword)

// extend from another type
type Student = Person & {
  year: number;
};

let student: Student = {
  name: "david",
  id: 5,
  year: 1,
};

// extend from another interface
interface IStudent extends IPerson {
  studentId: number;
}

// declaration merging
interface IStudent {
  year: number;
}

// any: disabling typescript
// unknown: the data can be anything, but you still need to do some type checking

// function foo(data: unknown){
//   if (typeof data === "string"){
//     return data.concat()
//   }
//   if (typeof data === "number"){
//     return data.toString();
//   }
// }

// generic type
function toNumberArr(x: number, y: number): number[] {
  return [x, y];
}

function toStringArr(x: string, y: string): string[] {
  return [x, y];
}

function toArr<T>(x: T, y: T): T[] {
  return [x, y];
}

toArr<string | number>("1", 2);

// tuple - an array with defined length and type of the elements
let arr: [number, string, boolean] = [1, "1", true];

arr[0].toFixed(2);
arr[1].indexOf("2");
