import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1233;
let pinAnswer = await inquirer.prompt({
    name: "q1",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.q1 === myPin) {
    console.log("correct pin code");
    let opearationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(opearationAns);
    if (opearationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number ",
            },
        ]);
        console.log(myBalance - amountAns.amount);
    }
}
else {
    console.log("incorrect pin code");
}
