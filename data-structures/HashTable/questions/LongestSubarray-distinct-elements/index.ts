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