// Find max of 3 elements

function MaxOfThree(a,b,c){
    return (a>b) ? (a>c ? a : c) : (b>c ? b : c)
}
console.log(MaxOfThree(11,-15,13))