let cardNumber = "1234567890123456";
let correctPin = "1234";

let balance = 5000;

let transactions = [];

let pinValue = "";


// Keypad number input
function addNumber(number){

    if(pinValue.length < 4){

        pinValue += number;

        document.getElementById("pin").value = pinValue;

    }

}


// Remove last digit
function backspace(){

    pinValue = pinValue.slice(0,-1);

    document.getElementById("pin").value = pinValue;

}


// Clear fields
function clearInput(){

    document.getElementById("cardNumber").value = "";

    document.getElementById("pin").value = "";

    pinValue = "";

    document.getElementById("message").innerHTML = "";

}



// Login

function login(){

    let enteredCard =
    document.getElementById("cardNumber").value;


    let enteredPin =
    document.getElementById("pin").value;


    let message =
    document.getElementById("message");


    if(
        enteredCard === cardNumber &&
        enteredPin === correctPin
    ){

        message.style.color = "green";

        message.innerHTML =
        "Login Successful";


        alert("Welcome to ATM Simulator");

    }

    else{

        message.style.color = "red";

        message.innerHTML =
        "Invalid Card Number or PIN";

    }

}



// Deposit

function deposit(){

    let amount =
    prompt("Enter deposit amount");


    if(amount){

        amount = Number(amount);


        if(amount > 0){

            balance += amount;


            transactions.push(
                "Deposited: $" + amount
            );


            alert(
                "Deposit Successful\nBalance: $" + balance
            );

        }

    }

}



// Withdraw

function withdraw(){

    let amount =
    prompt("Enter withdrawal amount");


    if(amount){

        amount = Number(amount);


        if(amount <= balance && amount > 0){

            balance -= amount;


            transactions.push(
                "Withdrawn: $" + amount
            );


            alert(
                "Please collect your cash\nBalance: $" + balance
            );

        }

        else{

            alert("Insufficient Balance");

        }

    }

}



// Balance enquiry

function checkBalance(){

    alert(
        "Current Balance: $" + balance
    );

}



// Mini Statement

function miniStatement(){

    if(transactions.length === 0){

        alert("No Transactions Available");

    }

    else{

        let statement =
        "ATM MINI STATEMENT\n\n";


        for(let i=0;i<transactions.length;i++){

            statement +=
            transactions[i] + "\n";

        }


        statement +=
        "\nCurrent Balance: $" + balance;


        alert(statement);

    }

}



// Change PIN

function changePin(){

    let newPin =
    prompt("Enter New 4 Digit PIN");


    if(newPin.length === 4){

        correctPin = newPin;


        alert(
            "PIN Changed Successfully"
        );

    }

    else{

        alert(
            "PIN must contain 4 digits"
        );

    }

}



// Exit

function exitATM(){

    alert(
        "Thank you for using ATM Simulator"
    );


    clearInput();

}