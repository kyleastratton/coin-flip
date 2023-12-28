let heads = 0;
let tails = 0;

function flip() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        updateResult("Heads");
    }else{
        updateResult("Tails");
    }
};

function updateResult(coin) {
    document.getElementById("result").innerHTML = coin;
    if (coin === "Heads") {
        addHeads();
    } 
    if (coin === "Tails") {
        addTails();
    }
};

function addHeads() {
    let value = document.querySelector("#headsScore").innerHTML;
    let numberValue = Number(value);
    let newValue = numberValue + 1;
    document.querySelector("#headsScore").innerHTML = newValue;
}

function addTails() {
    let value = document.querySelector("#tailsScore").innerHTML;
    let numberValue = Number(value);
    let newValue = numberValue + 1;
    document.querySelector("#tailsScore").innerHTML = newValue;
}