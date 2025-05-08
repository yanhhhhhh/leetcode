/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */
// 双指针
// 1. 排序
// 2. 遍历数组，移动左指针和右指针
// 3. 如果nums[i]+nums[j]<target，说明nums[i]和nums[j]的和小于目标值， 
//   那么nums[i]和nums[j-1]的和也小于目标值，所以可以将j-i的值加入结果集，左移左指针（i++）
// 4. 如果nums[i]+nums[j]>=target，说明nums[i]和nums[j]的和大于等于目标值，
//   那么需要将右指针左移（j--），直到nums[i]+nums[j]<target
// 5. 返回结果集


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let ans = 0;
  let i =0;
  
  nums.sort((a,b)=>a-b);

 
 // if(nums[0]+nums[1]>target) return ans;
  let j = nums.length-1
  while(i<j){
      if(nums[i]+nums[j]<target){
         ans = ans + (j-i);
          i++
         
      }else{
          j--;
      }
  }
  return ans

};
console.log(countPairs([-5,0,-7,-1,9,8,-9,9], -14)) 
// @lc code=end

