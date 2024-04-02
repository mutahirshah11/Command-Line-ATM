#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; // dollars
let myPin = 1111;
console.log("_____________-->__________________Welcome to Maize Bank________________<--_______________ ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code you can Proceed :)"); // if pin is correct you can proceed
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select any one Option",
            type: "list",
            choices: ["Withdraw", "Check My Balance", "Fast Cash"]
        }
    ]);
    console.log(operationAns.operation); // here you printed the option you choose previously 
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt(// now if you click withdrew you have option to enter amount 
        [
            {
                name: "amount",
                message: "Enter Your Amount to Withdrew",
                type: "number",
            }
        ]);
        console.log(amountAns.amount); // your entered amount would be showed here 
        if (amountAns.amount <= myBalance) { // if your amount is equal to or less than your balance so it should work or else insufficent funds
            myBalance -= amountAns.amount;
            console.log("Your Remaining Balance is " + myBalance);
        }
        else {
            console.log("Sorry insufficent Balance");
        }
    }
    else if (operationAns.operation === "Check My Balance") {
        console.log("Dear Customer Your Current Balance is " + myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        const fastt = await inquirer.prompt([
            {
                name: "chooseCash",
                message: "What Amount you want to Withdrew ?",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        let choosenAmount = fastt.chooseCash;
        if (choosenAmount <= myBalance) {
            myBalance -= choosenAmount;
            console.log("Your Remaining Balance is " + myBalance);
        }
        else {
            console.log("Sorry, insufficient Balance");
        }
    }
}
else {
    console.log("Sorry Incorrect Pin Code"); // if pincode is incoreect 
}
