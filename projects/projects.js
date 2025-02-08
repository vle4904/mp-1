function addition(){
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    if(first + second < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(first + second);
}

function subtraction(){
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    if(first - second < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(first - second);
}

function multiplication(){
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    if(first * second < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(first * second);
}
function division(){
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    if(first / second < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(first / second);
}

function power(){
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;

    first = Number(first);
    second = Number(second);

    let ans = 1

    for(let i = 0; i < Math.abs(second); i++){
        ans = first * ans;
    }

    if(ans < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }

    if(second < 0){
        document.getElementById("output").innerHTML = String(1/ans);
    } else {
        document.getElementById("output").innerHTML = String(ans);
    }
}

function reset(){
    document.getElementById("first-number").value = '';
    document.getElementById("second-number").value = '';
    document.getElementById("output").innerHTML = '';
}