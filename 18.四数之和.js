/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
//  1. 和三数之和一样，先排序
//  2. 枚举第一个数，枚举第二个数
//  3. 使用双指针查找另外两个数
//  4. 如果四数之和等于目标值，加入结果集
//  5. 如果四数之和小于目标值，左指针右移
//  6. 如果四数之和大于目标值，右指针左移
//  7. 注意去重 ，去重方法
//  8. 1. 枚举第一个数时，跳过重复的数
//  9. 2. 枚举第二个数时，跳过重复的数
//  10. 3. 在双指针查找时，跳过重复的数
//  11. 4. 在双指针查找时，左指针右移时，跳过重复的数
//  12. 5. 在双指针查找时，右指针左移时，跳过重复的数
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  var i = 0;
  var ans = [];
  for (; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (var j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      var k = j + 1;
      var l = nums.length - 1;
      while (k < l) {
        var sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum == target) {
          ans.push([nums[i], nums[j], nums[k], nums[l]]);
          while (k < l && nums[k] == nums[k + 1]) k++;
          while (k < l && nums[l] == nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return ans;
};
// @lc code=end
