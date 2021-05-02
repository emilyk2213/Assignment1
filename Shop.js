var table = document.getElementsByTagName('table')[0];

function addCustomerRow(){

    // Declare variables
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    
    // Display alert if input is empty
    if(firstname == '' || lastname == '')
    {
        alert("Please ensure all the fields are filled in");
        return;
    }
    else
    {
        // Add rows 
        var newRow = customers.insertRow(1);
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);

        // Create a Timestamp
        Math.round(Date.now() / 1000);
 
        // insert data onclick
        cell0.innerHTML = firstname;
        cell1.innerHTML = lastname;        
    }
    // Removes text input when click 'add' button 
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';

}
function addProductRow()
{
    var productname = document.getElementById('productname').value;
    var price = document.getElementById('price').value;

    // check input is filled in
    if(productname == '' || price == '')
    {
        alert("Please ensure all the fields are filled in");
        return;
    }
    else
    {
        // Add rows 
        var newRow = product.insertRow(1);
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        
        // Create a Timestamp
        var timestamp = Math.round(Date.now() / 1000);
 
        // insert data onclick
        cell0.innerHTML = productname;
        cell1.innerHTML = price;
    }

    // Removes text input when click 'add' button 
    document.getElementById('productname').value = '';
    document.getElementById('price').value = '';
}

function addTransactionRow()
{
    var firstname = document.getElementById('firstname').value;
    var newRow = transaction.insertRow(1);
    var cell0 = newRow.insertCell(0);
    cell0.innerHTML = firstname;
}

// Attempt to delete clicked on rows
function deleteCustomerRow()
{
    // change colour of the row
    var index,
    customers = document.getElementById("customers");

    for(var i = 0; i < customers.rows.length; i++)
    {
        customers.rows[i].onclick = function()
        {
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("selected");
            }
            console.log(typeof index);
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(typeof index);

            // actually delete the row
            customers.deleteRow(index);
        }; 
    }
}
deleteCustomerRow();


// Attempt to delete clicked on rows
function deleteProductRow()
{
    // change colour of the row
    var index,
    product = document.getElementById("product");

    for(var i = 0; i < product.rows.length; i++)
    {
        product.rows[i].onclick = function()
        {
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("selected");
            }
            console.log(typeof index);
            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(typeof index);

            // actually delete the row
            product.deleteRow(index);
        }; 
    }
}
deleteProductRow();