/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
// 滑动窗口
// 1. 使用一个集合来存储当前子串的字符
// 2. 使用两个指针，left 和 right，分别表示当前子串的左右边界
// 3. 当 right 指针指向的字符已经在集合中时，移动 left 指针，直到集合中不再包含该字符
// 4. 将 right 指针指向的字符加入集合中
// 5. 更新最长子串的长度
// 6. 返回最长子串的长度
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var left = 0;
  var right = 0;
  var set = new Set();
  var max = 0;
  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);

    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};
// @lc code=end
