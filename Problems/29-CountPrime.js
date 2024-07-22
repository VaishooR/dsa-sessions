// Leetcode-204 : Count Primes


function CountPrimes(n) {
    let arr = [];
    let count=0;
    if(n<=2){return 0}
    for(let i=0;i<n;i++){
        arr[i] = true;
    }
    for(let p=2; p*p < n; p++){
        if(arr[p]){
            for(let i=p*p; i<=n; i+=p){
                arr[i] = false
            }
        }
    }
    for(let i=2; i<arr.length; i++){
        if(arr[i]){
            count++;
        }
    }
    console.log(arr)
    return count
    // let arr=[];
    // for(let i=2;i<n;i++) {
    //     let prime=true;
    //     for(let j=2;j<=Math.sqrt(i);j++){
    //         if(i%j == 0){
    //             prime=false;
    //             break;
    //         }
    //     }
    //     prime && arr.push(i)
    // }
    // return arr.length
};
CountPrimes(10)
