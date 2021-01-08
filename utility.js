const readline = require('readline-sync')
let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
 let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");
class Utility {
   firstNameValidator=(firstname)=> {
     firstname = readline.question("Enter valid First name: ")
      if (NAME_PATTERN.test(firstname)) {
         console.log("valid First Name:",firstname);
      }
      else {
          console.log("Invalid First Name");
        }
  }
  lastNameValidator=(lastname)=> {
    lastname = readline.question("Enter valid Last name: ")
     if (NAME_PATTERN.test(lastname)) {
        console.log("valid Last Name:",lastname);
     }
     else {
         console.log("Invalid Last Name");
       }
    }
  emailValidator=(email)=>{
    email = readline.question("Enter valid email : ");
    if (EMAIL_PATTERN.test(email)) {
        console.log("valid Email",email);
    }
    else {
        console.log("Invalid Email");
    }
  }
  
 }


module.exports = new Utility();