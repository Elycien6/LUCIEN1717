function calcul(reset = false) 
{let total = 0;
    for (let i = 1; i <= 3; i++) {var a = reset ? 0 : parseFloat(document.getElementById('a' + i).value) || 0;
        var b = reset ? 0 : parseInt(document.getElementById('b' + i).value) || 0;
        var c = a * b;
        document.getElementById('a' + i).value = a;
        document.getElementById('b' + i).value = b;
        document.getElementById('c' + i).value = reset ? 0 : c;
        total += c; }
    document.getElementById('total').value = reset ? 0 : total;}
