
 
 function display() {
     Name =  document.getElementById('firstname').value;
     email = document.getElementById('email').value;
     phone =  document.getElementById('phone').value;

     data = {
         Name,
         email,
         phone
     }

     alert(JSON.stringify(data,null,2));
 } 