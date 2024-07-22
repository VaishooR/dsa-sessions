// Leetcode-2523 : Closest Prime Numbers in Range


// APPROACH-1 : (own)
function ClosestPrimeNumInRange(left,right){
    let arr=[];
    for(let i=left;i<=right;i++){
        if(i==1){
            continue;
        }
        let prime=true;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                prime=false;
                break;
            }
        }
        prime && arr.push(i)
    }
    console.log(arr)

    if (arr.length <= 1){return ([-1,-1])}

    let val=arr[arr.length-1];
    let res;
    for(let i=0;i<arr.length-1;i++){
        let diff = arr[i+1] - arr[i]
        if(diff<val){
            val=diff
            res = [arr[i],arr[i+1]]
        }
    }
    return res
}
console.log(ClosestPrimeNumInRange(19,31))
