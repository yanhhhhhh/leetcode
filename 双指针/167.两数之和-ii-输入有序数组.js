/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
// 双指针解法：适用于有序数组
// 1. 定义两个指针，i指向数组的第一个元素，j指向数组的最后一个元素
// 2. 如果i指向的元素和j指向的元素之和大于目标值，则j指针向左移动一位
// 3. 如果i指向的元素和j指向的元素之和小于目标值，则i指针向右移动一位
// 4. 如果i指向的元素和j指向的元素之和等于目标值，则返回i和j的下标
// 5. 如果i指针和j指针相遇，则说明没有找到符合条件的元素，返回空数组
// 6. 时间复杂度O(n)，空间复杂度O(1)
// 7. 注意：题目要求返回的是下标从1开始的，所以在返回时需要加1

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (true) {
      let s = numbers[left] + numbers[right];
      if (s === target) {
          return [left + 1, right + 1]; // 题目要求下标从 1 开始
      }
      s > target ? right-- : left++;
  }
};


// @lc code=end



  
  
  