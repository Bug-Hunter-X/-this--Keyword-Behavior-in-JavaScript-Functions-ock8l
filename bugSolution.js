function myFunc() {
  console.log(this);
}

// Solution 1: Using bind
const boundFunc = myFunc.bind({ name: 'Bound Object' });
boundFunc();

// Solution 2: Using call
const obj = {
  myMethod: myFunc
};
myFunc.call(obj); // this refers to obj

// Solution 3: Using apply
const arr = ['arg1', 'arg2'];
myFunc.apply(obj, arr); // this refers to obj, args are passed as an array

const obj2 = { name: 'Object 2' };
myFunc.call(obj2); // 'this' refers to obj2