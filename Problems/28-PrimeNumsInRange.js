// Prime numbers in given range


// APPROACH-1 : (Nested loops)
function PrimeNumsInRange(num){
    let arr=[];
    for(let i=2;i<=num;i++){
        let prime=true;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i % j == 0){
                prime=false;
                break;
            }
        }  
        prime && arr.push(i) 
    }
    return arr.join()  
}
console.log(PrimeNumsInRange(20))



// APPROACH-2 : (Splitting nested loops into 2 separate functions)
function CheckPrime(i){
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i % j == 0){
            return false
        }
    }
    return true
 }
 function PrimeInRange(num){
    let arr=[]
    for(let i=2;i<=num;i++){
       let result = CheckPrime(i)
       result && arr.push(i) 
    }
    return arr.join()
 }
 console.log(PrimeInRange(30))



// APPROACH-3 : Sieve Of Eratosthenes (own code)
function SieveOfEratosthenes(num) {
    let arr=[1,2];
    for(let i=3; i<=num; i++) {
        arr.push(i)
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        for(let j=i;j<num;j++){
            if(arr[j] % i == 0){
                arr[j] = 0
            }
        }
    }
    console.log(arr.filter(num => num !== 0).join(' '))
}
SieveOfEratosthenes(20)
 


// APPROACH-4 : Sieve Of Eratosthenes (proper code)
function SieveOfEratosthenes2(num) {
    let arr = [];
    for(let i=0;i<=num;i++){
        arr[i] = true;
    }
    for(let p=2; p*p <= num; p++){
        if(arr[p]){
            for(let i=p*p; i<=num; i+=p){
                arr[i] = false
            }
        }
    }
    for(let i=1; i<arr.length; i++){
        if(arr[i]){
            console.log(i)
        }
    }
}
SieveOfEratosthenes2(23)
