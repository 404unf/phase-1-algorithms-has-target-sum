function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i<array.length;i++){
    const num = array[i]
    for(let j=1;j<array.length;j++){
      if(i === j){}
      else{
        let sum = num + array[j]
        if(sum === target){ return true}
      }
    }
  }

  return false
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n^2)

/* 
  Add your pseudocode here
*/
// For every number in the array
// add it once to all the other numbers
// but don't add the same number twice
// if the sum of two number equals the target
// return true
// else return false

/*
  Add written explanation of your solution here
*/
// Each number of the array, needs to be added to the other numbers
// You can't add the same number twice. That would essentially be 
// num x 2. 
// Take the index of an element, and iterate through the other indeces
// If the indeces match, do nothing and continue
// If two elements summation matches the target, return true
// After iterating through all elements, return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
