// Make an array to store customers
var Customers = [];

// Create function to add customer everytime the 'add' button is clicked
function addCustomerRow()
{
    // Declare variables
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var table = document.getElementsByTagName('table')[0];
    var productname = document.getElementById('productname').value;
    var price = document.getElementById('price').value;
    
    
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
        // Math.round(Date.now() / 1000);
 
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

}

function deleteCustomerRow()
{
    var no = document.getElementsByTagName("tr");
    no.deleteRow
}
