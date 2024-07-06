// Check if the year is leap or not.

function LeapYear(year){
    if(year%400 == 0) {
        console.log("Leap Year")
    }else if(year%4 === 0 && year%100 !== 0){
        console.log("Leap Year")
    }else{
        console.log("Not a Leap Year")
    }
}
LeapYear(2022)



function LeapYear(year){
    return (year%4 === 0 && year%100 !== 0) || year%400 === 0 ? "Leap Year" : "Not a Leap Year" 
}
console.log(LeapYear(2022))