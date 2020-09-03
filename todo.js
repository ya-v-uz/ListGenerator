
// ya-v-uz.github.io





function getName(){
    
    var name = document.getElementById("usr-name");
    
    newValue = name.value;
    
    var len = newValue.length;

    if(len<2) {
        return;
        alert("invalid name");
        
    }
    else {
        newValue = name.value;
        return newValue;
    } 
}


function getSurname() {
   
    var surname = document.getElementById("usr-surname");
    
    newValue = surname.value;
    
    var len = newValue.length;

    if(len<2) {
        return;
        alert("invalid surname");
        
    }
    else {
        newValue = surname.value;
        return newValue;
    } 
}

function getCustomerNo() {
    var customerno = document.getElementById("usr-customerno");
    
    newValue = '#' + customerno.value;

        return newValue;
    
}


  
var log = [];
var Name; 
var Surname; 
var CustomerNo;
var count=1;


function setArray(x,y,z){   
    log[0] = count;
    log[1] = x;
    log[2] = y;
    log[3] = z;
    //alert(log[0] + ' ' + log[1] + ' ' + log[2]);
    return(log);
}

function submit() { 
    
    

    Surname = getSurname();
    Name = getName();
    CustomerNo = getCustomerNo();
   
   if( typeof(Name) == "undefined" || typeof(Surname) == "undefined") {
       alert("Unvalid Input");
   }
   else{
    setArray(Name,Surname,CustomerNo);
    insertTable(log);
    count = count + 1;
   }

}





function insertTable(a){

    var tableRef = document.getElementById('customerTable').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(-1);
    
    // Insert a cell in the row at index 0
    

   
   for(i=0; i<log.length; i++){
    var Cell1  = newRow.insertCell(i);
    var text1 = document.createTextNode(a[i]);
    Cell1.appendChild(text1)

   }
   
    /* var Cell1  = 
    var Cell2  = newRow.insertCell(2);
    var Cell3  = newRow.insertCell(3);  */
    
    // Append a text node to the cell
    
//var text1 = document.createTextNode(Name);
   /* var text2  = document.createTextNode('asdsad');
    var text3 = document.createTextNode('dfsdf)'); */
    
   
   
  // Cell1.appendChild(text1)
    
   /* Cell2.appendChild(text2)
    Cell3.appendChild(text3); */
    
    
} 
   



function clear() {
     document.getElementById("usr-name").value = ' ';

    /*  document.getElementById("usr-surname").value = " ";
     document.getElementById("usr-customerno").value = " "; */


    
}


function reset() {
    document.getElementById("form1").reset();
}







