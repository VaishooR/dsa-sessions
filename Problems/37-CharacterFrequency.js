// Check number of occurences of char in the given string.

function CharFrequencyInString(str,char){
    let strArray=str.split('')
    let count=0;
    for(let c of strArray){
        if(c.toLowerCase() == char || c.toUpperCase() == char){
           count++;
        }
    }
    console.log(count);
}
CharFrequencyInString("Monkey-NnNn","n")