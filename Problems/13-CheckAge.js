// Check couple is eligible for marriage 
// (girl age should be 18 boy should be 21) print yes or no
    

function checkAge(girlAge,boyAge){
    if(boyAge < 1 || girlAge < 1){
        console.log("Enter a valid Age for both");
        return;
    }
    (boyAge >= 21 && girlAge >=18) ? console.log("Eligible for Marriage") : console.log("Not Eligible")
}
checkAge(21,31)