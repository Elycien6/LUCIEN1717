
function ajouter() {
    var a = document.getElementById("t1").value;  
    var b = document.getElementById("t2").value;  
    var c = document.getElementById("t3").value;  

    var table = document.getElementById("myTable");
    var newRow = table.insertRow(-1);  

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1); 
    var cell3 = newRow.insertCell(2); 
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = '<input type="text" value="' + a + '" onchange="calculerTotal(this)">';
    cell2.innerHTML = '<input type="number" value="' + b + '" min="1" onchange="calculerTotal(this)">';
    cell3.innerHTML = '<input type="number" value="' + c + '" step="0.01" onchange="calculerTotal(this)">';
    cell4.innerHTML = '<input type="text" value="' + (b * c).toFixed(2) + '" readonly>';

    document.getElementById("t1").value = ""; 
    document.getElementById("t2").value = "1"; 
    document.getElementById("t3").value = "0.00"; 


    calculer();
}


function calculer() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    var sousTotal = 0;
    var taxe = 0;
    var remise = parseFloat(document.getElementById("remise").innerText);
    var livraison = 10;  

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");

    
        var quantity = parseFloat(cells[1].getElementsByTagName("input")[0].value);
        var unitPrice = parseFloat(cells[2].getElementsByTagName("input")[0].value);

        
        var total = quantity * unitPrice;
        cells[3].getElementsByTagName("input")[0].value = total.toFixed(2);  
        sousTotal += total;
    }

    
    taxe = sousTotal * 0.20;
    
   
    var total = sousTotal + taxe - remise + livraison; 


    document.getElementById("soustotal").innerText = sousTotal.toFixed(2);
    document.getElementById("taxe").innerText = taxe.toFixed(2);
    document.getElementById("Livraison").innerText = livraison.toFixed(2);  
    document.getElementById("total").innerText = total.toFixed(2);
}


function calculerTotal(input) {
    var row = input.closest('tr');
    var quantity = parseFloat(row.cells[1].getElementsByTagName("input")[0].value);
    var unitPrice = parseFloat(row.cells[2].getElementsByTagName("input")[0].value);

   
    var total = quantity * unitPrice;
    row.cells[3].getElementsByTagName("input")[0].value = total.toFixed(2);

 
    calculer();
}


function Reintialiser() {

    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "1";
    document.getElementById("t3").value = "0.00";
    document.getElementById("soustotal").innerText = "0.00";
    document.getElementById("taxe").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
    document.getElementById("remise").innerText = "15";  
    document.getElementById("Livraison").innerText = "10.00"; 

    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}
