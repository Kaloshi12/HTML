document.getElementById("myForm").addEventListener("submit",function(event){
event.preventDefault();
var name = document.getElementById('name').value;
var Email = document.getElementById('Email').value;
if(name === "" || Email===""){
    document.getElementById("output").innerText = "Please fill it";
    return;
}
var EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!EmailRegex.test(Email)){
document.getElementById("output").innerText = "Pls enter a valid email address";
return;
}
document.getElementById("output").innerText = "Form submit succesfully";
});
