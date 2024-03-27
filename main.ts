#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Welcome Message
console.log("\n\tWelcome To \ 'Abdul Rauf\' - CLI ATM\n");

let totalBalance = 12000;
let pinCode = 3579;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your PinCode:",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === pinCode) {
    console.log("Correct Pin Code!! Account Unlocked.");

    let atmAnswer = await inquirer.prompt(
        [
            {
                name: "atm",
                message: "Select your Option:",
                type: "list",
                choices: ["Withdraw", "Check Current Balance"]
            }
        ]
    );

    console.log(atmAnswer);

    if (atmAnswer.atm === "Withdraw") {
        let amountWant = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter amount you want:",
                    type: "number"
                }
            ]
        );

        totalBalance -= amountWant.amount;

        console.log("Your Remaining Balance is: " + totalBalance )
    } else if (atmAnswer.atm === "Check Current Balance"){
        console.log("Your Current Balance is: " + totalBalance)
    }
}

else {
    console.log("Oops! Incorrect Pin Code. Try Again!!");
}