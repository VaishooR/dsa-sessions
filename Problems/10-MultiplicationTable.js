// Write a program that prompts the user to input a positive
// integer. It should then print the multiplication table of that number.

// Explanation: 
// -----------
// 10*1=10
// 10*2=20
// 10*3=30
// 10*4=40
// 10*5=50


function multiplicationTable(num,upto=10){
    if(num < 1 || upto < 1){
        console.log("num & upto should be positive integer")
        return;
    }
    for(let i=1;i<=upto;i++){
        let result= num * i;
        console.log(`${num} * ${i} = ${result} `)
    }
}
multiplicationTable(2)
