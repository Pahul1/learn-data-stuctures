// https://leetcode.com/problems/contiguous-array/

function findMaxLength(nums: number[]): number {
    var max = 0;
    var count = 0;
    var map = new Map();
    for(let i = 0; i < nums.length; i++) {
        count = nums[i] === 0 ? count - 1 : count + 1;
        if(count === 0 && max < i+1) max = i+1; 
        if(map.has(count)) {
            var index = map.get(count);
            if(i - index > max) max = i - index;
        } else {
            map.set(count, i);
        }
    }
    return max;
};


/* 
the solution here is to think about how to calculate the num of zeros and 1s are equal. If you have  a variable count that 
you use to keep track of current zeros and 1s, by saying:

For each 1, add 1 to count
For each 0, remove 1 from count;

Now you will calculate count for each index. Using this, we can say that for each index where count is the same.. the subarray between
those two indexes have equal amount of zeros and 1s. Using this, we can then calculate the maximum subarray
*/