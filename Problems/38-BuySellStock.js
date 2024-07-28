// Leetcode-121 : Best Time to Buy and Sell Stock


//! APPROACH-1 : (Wrong Approach - Time Limit Exceeded)
function BuySellStock(arr){
    let profit=0;
    for(let i=0;i<arr.length;i++){   
        for(let j=i+1;j<arr.length;j++){        
            if(arr[j]-arr[i]>profit){
                profit = arr[j]-arr[i];
            }
        }
    }
    console.log(profit)
}
BuySellStock([7,1,5,3,6,4])
BuySellStock([7,6,4,3,10])
BuySellStock([7,6,4,3,1])




// APPROACH-2
var maxProfit = function(prices) {
    let buyPrice=prices[0];
    let maxProfit=0;
    for(let i=1; i<prices.length; i++) {
        if(buyPrice>prices[i]){
            buyPrice=prices[i];
        }
        maxProfit=Math.max(maxProfit,prices[i]-buyPrice);
    }
    
    return maxProfit
};
console.log(maxProfit([7,6,4,3,10]))