// Leetcode-14 : Longest Common Prefix


// APPROACH
var longestCommonPrefix = function (strs) {

    if (strs === null || strs.length === 0) return "";
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let result = "";

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) break;
        result += first[i];
    }

    return result;
};