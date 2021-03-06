const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// Create a function to count how many times a key appears in an array
const countAppearance =  function(array, key) {
  // input : an array and the key that needs to be counted
  // output :  the number of times the key appears in the array
  let count = 0;
  for (let string of array) {
    if (string === key) {
      count++;
    }
  }
  return count;
};

const countOnly = function(allItems, itemsToCount) {
  // input : array of items and an object containing which items to count
  // output: an object that contains the count of all items that need to be counted

  //get the keys from the input object
  let result = {};

  for (let key in itemsToCount) {
  
    if (itemsToCount[key] === true) {
      let count = countAppearance(allItems, key);
      result[key] = count;
    }
  }

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

module.exports = countAppearance, countOnly;
