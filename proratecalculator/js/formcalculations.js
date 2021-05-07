/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection

//This function finds the filling price based on the 
//drop down selection
function getleaseStart()
{
    var input = document.getElementById("start").value;
    var dateEntered = new Date(input);
    return dateEntered;
}

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getFullYear(), 
                    anyDateInMonth.getMonth()+1, 
                    0).getDate();}

        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var leasestartdate = getleaseStart();
    var daysinMonth = daysInMonth(leasestartdate);
    var daysRemaining = daysinMonth - leasestartdate.getDate();
    var proratedamount = (document.getElementById("leaseamount").value / daysinMonth * daysRemaining);
    console.log(leasestartdate);
    console.log(daysinMonth);
    console.log(daysRemaining);
 
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Prorated Installment Is $"+ (Math.round(proratedamount*Math.pow(10,2))/Math.pow(10,2)).toFixed(2) ;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}