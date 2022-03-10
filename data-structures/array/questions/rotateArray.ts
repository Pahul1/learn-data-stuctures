// https://leetcode.com/problems/rotate-array/

/**
 Do not return anything, modify nums in-place instead.
 */
// function rotate(nums: number[], k: number): void {
//     var len = nums.length;
//     if(len === k || k % len === 0) return;
    
    
//     k = k % len;
//     var start = len - k;

//     var flip = nums.slice(start, len);
//     nums.splice(start, k);
//     nums.splice(0, 0, ...flip);
// };

function rotate(nums: number[], k: number): void {
    var len = nums.length;
    if(len === k || k % len === 0) return;
    
    k = k % len;
    reverse(nums, 0, len - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, len - 1);
};

function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      var temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
}