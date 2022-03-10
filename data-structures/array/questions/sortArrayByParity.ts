// https://leetcode.com/problems/sort-array-by-parity/

function sortArrayByParity(nums: number[]): number[] {
    if(nums.length <= 1) return nums;
    
    var writePointer = 0;
    while(nums[writePointer] % 2 == 0) {
        writePointer++;   
    }
    
    for(var readPointer = writePointer + 1; readPointer < nums.length; readPointer++) {
        if(nums[readPointer] % 2 === 0) {
            var temp = nums[writePointer];
            nums[writePointer] = nums[readPointer];
            nums[readPointer] = temp;
            writePointer++;
        }
    }    
    return nums;
};