# The Problem

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

# Solutions

### Brute Force 
*Time Complexity: O(N^2), SpaceComplexity: O(N)*

The brute force method would be to go through each element and find the longest subarray with distinct values and keep track of the longest length;

Steps:
  1. Instantiate max_length (the variable we are going to return) to zero
  2. Loop through each element in the array
      *For each element, loop through the rest of the elements until you find a duplicate. To keep track of which elements have already passed, we can used a hashset,          set, or hashmap.
      *When a duplicate is found, calculate length of the current subarray. If greater than the max length found, replace the max.
  2. Return max;

Code (**Typescript**)
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

While this solution gets us the answer, we can always do better! When we have to solve this problem with a huge input array, this answer will be too slow to be able to be used in a production level codebase dealing with millions and millions of users. Of course, this isn't a usual problem we need to solve, but we should always strive to get the best performance without ruining readability.

### Two Pointers
*Time Complexity: O(n), Space Complexity: O(n)*

Let's look at the previous solution. We are looping through the array with two pointers (*using two for loops*), one for the element we are currently at (lets call it curr), and the second pointer (lets call it iterator) to loop through the rest of array. When we hit a duplicate occurrence, we move the the **curr pointer** to the next element, set **iterator pointer** to the index of curr pointer + 1, and start the process over again. 

How can we optimize this? Can we maybe instead of setting curr pointer to the next element, set curr pointer to the index after the first occurence of the duplicate element. Lets take an example. Assume our input is [8, 9, 5, 1, 6, 3, 5, 2, 3, 4, 1]. When we get to the second 5, our first iteration would using the first solution would set the curr pointer to 9. Instead, we can skip 9, 5 because they are already part of the previous sub array before the duplicate occurence. We now can set curr pointer to point to 1 at index 3 in the array. 

Code (**Typescript**)
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

        // Update ans to store maximum length of subarray. Make sure to add one to include one of the duplicate element.
        ans = Math.max(ans, fast - slow + 1);

        // Store the index of current element of arr[i]. Store value as the key and index (i) + 1 (because this is the next starting point)
        map.set(arr[fast], fast + 1);
    }
   
    // Return final ans
    return ans;
}
```
