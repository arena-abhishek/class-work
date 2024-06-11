/* function ValidateUsername() {
  let x = document.getElementById("Username").value;
  let username
  if (x === 'Admin') {
  } else if (userName === '' || userName === null) {
    alert( 'Canceled' );
  } else {
    alert( "I don't know you" );
  }
}
function ValidatePassword() {
  let z = document.getElementById("Password").value;
    if (z === 'Admin@123') {
      alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
      alert( 'Canceled' );
    } 
}
// alert(ValidateUsername())
// alert(ValidatePassword())
let y =document.getElementsByClassName("btn")
function btn() {
  ValidateUsername(), ValidatePassword()
}
 */

let user = document.getElementById("Username").firstElementChild;
let pass = document.getElementById("Password").firstElementChild;
let buttn = document.getElementById("bt-n");
function btn() {
  let user1 = user.value;
  let pass1 = pass.value;

  console.log(user1)
  console.log(pass1)

  if (user1 == "admin" && pass1 == "1230") {
    buttn.style.display = "block";
    console.log("changed");
    alert("welcome");
  } else {
    alert("not welcome");
  }
}

/* function btn(){
  var user = document.getElementById('Username');
  var pass = document.getElementById('Password');

  var a = user.value;
  var b = pass.value;

  if(a === 'admin' && b === 'admin123')
    {
      alert('hi');
    }
    else{
      alert('bye');
    }
} */
