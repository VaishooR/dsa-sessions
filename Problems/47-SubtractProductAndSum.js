// Leetcode-1281 : Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function(n) {
    let arr=n.toString().split('')
    let sum = 0;
    let product = 1;
    for(let i=0;i<arr.length;i++){
        sum += Number(arr[i])
        product *= Number(arr[i])
    }
    return product-sum
};
console.log(subtractProductAndSum(234))
