
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

// O(n^2)
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