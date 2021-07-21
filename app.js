// in one loop we will need 2 variables current and global to keep track of the largest sum 
// push first element to both variables then loop through the second element in the array 



// cont array = [-1, 2, 3, -5, 4];
const maxSubArray = nums => {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];


    for (let i = 0; i < nums.length; i++) {
        // maxCurrent will  be  either nums[i] or maxCurrent + nums[i]
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
        // check to see if  maxCurrent is greater than the maxGlobal and if it is it will set the maxC to maxG
        if (maxCurrent > maxGlobal) {
            // will continue to loop until we have largest sum in the maxGlobal
            maxGlobal = maxCurrent
        }
    }
};

return maxGlobal;

// return the largest sum