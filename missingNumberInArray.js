//generate integer array between 0 and 100
const array = Array.from({ length: 60 }, () => Math.floor(Math.random() * 100));
const set = [...new Set(array)];
console.log(set.sort((a, b) => a - b));

//array with 1 to 100
const array2 = Array.from({ length: 100 }, (v, k) => k + 1);

const array3 = array2.filter((v) => !set.includes(v));
console.log(array3.sort((a, b) => a - b));
