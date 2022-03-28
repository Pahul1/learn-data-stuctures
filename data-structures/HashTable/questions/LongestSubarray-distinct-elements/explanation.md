# The Problem

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

# Solutions

### Brute Force 
*Time Complexity: O(N^2), SpaceComplexity: O(N)*

The most direct and brute force method would be to go through each element and find the longest subarray with distinct values and keep track of the longest length;

Steps:
  1. Instantiate max_length (the variable we are going to return) to zero
  2. Loop through each element in the array
      *For each element, loop through the rest of the elements until you find a duplicate. To keep track of which elements have already passed, we can used a hashset,          set, or hashmap.
      *When a duplicate is found, calculate length of the current subarray. If greater than the max length found, replace the max.
  2. Return max;

Code (**In Typescript**)
```
function largestSubarrayHorriblePerformance(arr: number[])
{
    let max_length: number = 0;
    for(let curr: number = 0; curr < arr.length; curr++)
    {
        let len = getSubArrayLength(curr, arr);
        max_length = Math.max(len, max_length);
    }
    // Return final ans
    return max_length;
}

function getSubArrayLength(index: number, arr: number[]) {
    let set = new Set();
    set.add(arr[index]);
    
    let length = 1;
    for(let i = index + 1; i < arr.length; i++) {
        if(set.has(arr[i])) {
            return length;
        }
        set.add(arr[i]);
        length++;
    }
    return length;
}
```

While this solution gets us the solution, we can do better! When we are working with huge arrays, this answer will be too slow to be able to be used in a production 


Code (Typescript):
```
// O(n) time, O(n) space
function largest_subarray(arr: number[])
{
    // Stores index of array elements
    let map = new Map();
    let ans: number = 0;

    for(let fast: number = 0, slow: number = 0; fast < arr.length; fast++)
    {
   
        // Update slow pointer based on the last occurence of duplicate number in the current sequence. since we store index for
        // each element + 1, we can just set the slow pointer to that value;
        slow = Math.max(map.has(arr[fast]) ? map.get(arr[fast]) : 0, slow);

        // Update ans to store maximum length of subarray. Make sure to add one to include one of the elements that were duplicated.
        ans = Math.max(ans, fast - slow + 1);

        // Store the index of current element of arr[i]. Store value as the key and index (i) + 1 (because this is the next starting point)
        map.set(arr[fast], fast + 1);
    }
   
    // Return final ans
    return ans;
}
```
