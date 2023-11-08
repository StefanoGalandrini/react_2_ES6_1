/**
 * Funzione che unisce due array
 */
const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
  // return [arr1, arr2];
};

const mergeObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
  // return {obj1, obj2};
};

console.log(mergeArray([1, 2, 3], [4, 5, 6]));
console.log(
  mergeObj(
    { name: "Mario", address: "Via Roma" },
    { age: 50, address: "Via Berlino" }
  )
);
