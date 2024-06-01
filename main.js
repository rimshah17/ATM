import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: " please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: " enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining Balance is" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your Balance is" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
