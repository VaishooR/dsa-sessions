// Write a program to display first n odd numbers.


function displayOdd(n){
    if(n<1){
        return "Enter a positive integer";
    }
    let oddIntegers=[];
    for(let i=0;i<=n;i++){
       if(i%2 != 0){
        oddIntegers.push(i)
       }
    }
    return oddIntegers.join()
}
console.log(displayOdd(15))