function hasTargetSum(array, target) {
  // Write your algorithm here
    // Create an empty object to store values we've seen so far
    const seenValues = {};
  
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
      // Check if the complement of the current element (i.e. the value needed to reach the target)
      // has already been seen in the array
      const complement = target - array[i];
      if (seenValues[complement]) {
        // If the complement is in the object, we've found a pair of values that sum up to the target
        return true;
      } else {
        // Otherwise, add the current element to the object as a seen value
        seenValues[array[i]] = true;
      }
    }
  
    // If we've gone through the whole array without finding a pair that sums up to the target, return false
    return false;
  }
  


/* 
  
The time complexity of the hasTargetSum function is O(n), where n is the length of the input array. This is because the function loops through the array once and performs constant-time operations (i.e. hash table lookups) for each element. The worst-case scenario is when the target sum is not found in the array, in which case the function will loop through the whole array before returning false. Therefore, the time complexity of the function is linear with respect to the length of the input array.*/



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
