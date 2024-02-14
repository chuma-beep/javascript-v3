console.log('Hello from math.js');

console.log(window)
export const PI = 22/7;
// window.METHOD = () => {
//   console.log('Hello from math.js');
// };

export const random = () => {
  return Math.random();
};

// Math.max
export const max = (arr) => {
  console.log(arr);
  console.log(typeof arr);
  console.log(Array.isArray(arr));
  return Math.max(...arr);
}


const math = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

export default math;

// module.exports = math;
