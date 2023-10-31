function pswdFunction() {
  var x = document.getElementById("passwrdBox");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function rgpswdFunction() {

    var pswd1 = document.getElementById("password");
    
    var pswd2 = document.getElementById("verifyPassword");
  
    if (pswd1.type === "password") {
    pswd1.type = "text";
  } else {
    pswd1.type = "password";
  }
}


function rgpswd2Function() {
    var pswd2 = document.getElementById("verifyPassword");
    
    if (pswd2.type === "password") {
    pswd2.type = "text";
  } else {
    pswd2.type = "password";
  }
}