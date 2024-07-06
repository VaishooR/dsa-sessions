// Print tax amount if bill amount is 50000 above then tax is 10%
// else 5% , using ternary operator.

function TaxAmount(billAmount){
    if(billAmount<=0){
        console.log("Not valid amount")
        return;
    }
    let taxAmount;
    billAmount >= 50000 ? taxAmount = (10/100) * billAmount : taxAmount = (5/100) * billAmount;
    console.log(taxAmount)
}
TaxAmount(100)
TaxAmount(60000)