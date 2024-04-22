// 给你一个整数 n ，让你来判定他是否是 阿姆斯特朗数，是则返回 true，不是则返回 false。

// 假设存在一个 k 位数 n ，其每一位上的数字的 k 次幂的总和也是 n ，那么这个数是阿姆斯特朗数 。



// 示例 1：

// 输入：n = 153
// 输出：true
// 示例：
// 153 是一个 3 位数，且 153 = 13 + 53 + 33。
// 示例 2：

// 输入：n = 123
// 输出：false
// 解释：123 是一个 3 位数，且 123 != 13 + 23 + 33 = 36。


let isArmstrong = function (n) {
    if (n == 0) return true
    let arr = Array.from(String(n), Number)
    console.log(arr);
    let sum = 0
    arr.forEach((item) => {
        sum = sum + Math.pow(Number(item), arr.length)
    })
    console.log(sum);
    if (sum == n) {
        return true
    } else {
        return false
    }
};
console.log(isArmstrong(153));
//不能用reduce的原因是，reduce会把上次相加的结果作为参数进行下一次相加
//那么就会把上一次结果进行次方运算，导致结果大相径庭
