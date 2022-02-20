function sortArrayByParity(nums: number[]): number[] {
    var wp = 0;
    while(nums[wp] % 2 === 0 && wp < nums.length) {
        wp++;
    }
    var rp = wp + 1;
    for(rp; rp < nums.length; rp++) {
        if(nums[rp] % 2 === 0) {
            var temp = nums[wp];
            nums[wp] = nums[rp];
            nums[rp] = temp;
            wp++;
        }
    }
    return nums;
};