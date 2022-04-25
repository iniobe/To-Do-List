
function login(Loginform){
  if(Loginform.username.value && loginform.password.value){
    var username=document.getElementsByClassName("username").value;
    document.write("Welcome" + " ");
    document.write(username);
  }
  else
  alert("Please Enter your username & paasword..");
}