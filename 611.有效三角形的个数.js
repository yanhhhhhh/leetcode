/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */
// 三角形 最短的两边之和大于第三边
//  固定最长的边，剩下的两边之和大于第三边
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let k = 2; k < nums.length; k++) {
    let c = nums[k];
    let i = 0;
    let j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > c) {
        // 由于 nums 已经从小到大排序
        // nums[i]+nums[j] > c 同时意味着：
        // nums[i+1]+nums[j] > c
        // nums[i+2]+nums[j] > c
        // ...
        // nums[j-1]+nums[j] > c
        // 从 i 到 j-1 一共 j-i 个

        ans = ans + (j - i);

        j--;
      } else {
        // 由于 nums 已经从小到大排序
        // nums[i]+nums[j] <= c 同时意味着
        // nums[i]+nums[j-1] <= c
        // ...
        // nums[i]+nums[i+1] <= c
        // 所以在后续的内层循环中，nums[i] 不可能作为三角形的边长，没有用了

        i++;
      }
    }
  }
  return ans;
};
// @lc code=end
// console.log(triangleNumber([2, 2, 3, 4]));
