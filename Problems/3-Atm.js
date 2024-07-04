function Atm(){
    let balance=5000;
    console.log("Your Balance is :",balance)

    function deposit(noOf100s,noOf500s){
        console.log("")
        
       // deposit amount
       let depositAmount = noOf100s*100 + noOf500s*500
       if(depositAmount <= 0){
        console.log("Please deposit a minimum of Rs 100")
        return;
       }
       console.log("Deposit Amount is :",depositAmount)

       // deposit 100Rs & 500Rs notes
       console.log("Deposited : Rs100 =",noOf100s,"Rs500 =",noOf500s) 

       // update balance
       balance += depositAmount
       console.log("Your Balance is :",balance)
    }
    
    function withdraw(amount){
        console.log("")
        let noOf100s = 0;
        let noOf500s = 0;

        // check amount
        if(amount>balance){
            console.log("Insufficient Balance")
            return;
        }else if(amount<=0){
            console.log("Please Enter a Valid Amount")
            return;
        }else if(amount<100){
            console.log("Please Enter a Minimum of Rs 100")
            return;
        }else if(amount%100 !== 0){
            console.log("Please Enter Amount in Multiples of Rs 100")
            return;
        }

        // withdraw amount
        console.log("Withdraw Amount is :",amount)

        // withdraw 100Rs & 500Rs notes
        noOf500s = Math.floor(amount/500)
        noOf100s = (amount - (noOf500s * 500))/100
        console.log("Withdrawn : Rs100 =",noOf100s,"Rs500 =",noOf500s) 
       
        // update balance
        balance -= amount
        console.log("Your Balance is :",balance)

    }
    return {deposit,withdraw}
}
const atm=Atm()
atm.deposit(10,1)
atm.withdraw(500)
