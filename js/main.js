var send = document.getElementById('send');
send.addEventListener('click', myFunction);
var serial = 1;
function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var company = document.getElementById('company').value;
    var message = document.getElementById('message').value;


    if(name == ""){
        window.alert("All fields must be filled !");  
        return;      
    }else if(email==""){
        window.alert("All fields must be filled !");
        return;
    }
    else if(subject==""){
    window.alert("All fields must be filled !");
    return;
    }
    else if(company ==""){
        window.alert("All fields must be filled !");
        return;
        }
    else if(message ==""){
    window.alert("All fields must be filled !");
    return;
    }

    else{
        addMessage();
        serial += 1;
    }
}

function addMessage(){    
    var name = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var company = document.getElementById('company').value;
    var message = document.getElementById('message').value;
    
	var customerList = document.getElementById('customer');
    var newItem = document.createElement('tr');
    var sn = document.createElement('td');			
    var customerName = document.createElement('td');
    var customerEmail = document.createElement('td');
    var customerSubject = document.createElement('td');
    var customerCompany = document.createElement('td');
    var customerMessage = document.createElement('td');
    sn.innerText = serial;
    customerName.innerText = name;
    customerEmail.innerText = email;
    customerSubject.innerText = subject;
    customerCompany.innerHTML = company;
    customerMessage.innerText = message;
    customerList.appendChild(newItem);
    newItem.appendChild(sn);
    newItem.appendChild(customerName);
    newItem.appendChild(customerEmail);
    newItem.appendChild(customerSubject);
    newItem.appendChild(customerCompany);
    newItem.appendChild(customerMessage);
	
}