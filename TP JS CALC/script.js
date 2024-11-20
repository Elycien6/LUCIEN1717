function addition() {
    let a = parseFloat(document.getElementById("t1").value);
    let b = parseFloat(document.getElementById("t2").value);
    let result = a + b;
    document.getElementById("t3").value = result;
}

function soustraction() {
    let a = parseFloat(document.getElementById("t1").value);
    let b = parseFloat(document.getElementById("t2").value);
    let result = a - b;
    document.getElementById("t3").value = result;
}

function division() {
    let a = parseFloat(document.getElementById("t1").value);
    let b = parseFloat(document.getElementById("t2").value);
    if (b !== 0) {
        let result = a / b;
        document.getElementById("t3").value = result;
    } else {
        document.getElementById("t3").value = "Erreur";
    }
}

function multiplication() {
    let a = parseFloat(document.getElementById("t1").value);
    let b = parseFloat(document.getElementById("t2").value);
    let result = a * b;
    document.getElementById("t3").value = result;
}

function permute() {
    let a = document.getElementById("t1").value;
    let b = document.getElementById("t2").value;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}

function parite() {
    let v = parseInt(document.getElementById("t1").value);
    let result = (v % 2 === 0) ? "Pair" : "Impair";
    document.getElementById("t4").value = result;
}
