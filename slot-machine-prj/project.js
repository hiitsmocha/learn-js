// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. play again

// function deposit () {
//     return 1
// }

const prompt = require("prompt-sync")();

const rows = 3;
const cols = 3;

const symbols_count = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const symbol_values = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbols_count))
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);   
        };
        console.log(symbols);
}
spin();


const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
    }
}

const getNumberofLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberofLines = parseFloat(lines);

    if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
        console.log("Invalid line number, try again.");
    } else {
        return numberofLines;
    }
}
};

const getBet = (balance, lines) => {
    while(true) {
    const bet = prompt("Enter the total bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet amount, try again.");
    } else {
        return numberBet;
    }
}
};

let balance = deposit();
const numberofLines = getNumberofLines()

const bet = getBet(balance, numberofLines);


