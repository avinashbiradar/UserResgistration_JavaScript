const readline = require('readline-sync')
 let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
 let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
 let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");
 let PASSWORD_PATTERN = new RegExp("(?=.*[0-9])(?=.*[A-Z]).{8,40}");
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
  phoneValidator=(phoneNumber)=>{
      phoneNumber=readline.question("Enter valid Phone Number");
      if (PHONE_NUMBER_PATTERN .test(phoneNumber)) {
        console.log("valid Phone Number ",phoneNumber);
    }
    else {
        console.log("Invalid Phone Number ");
    }
  }
  passwordValidator(password) {
   password=readline.question("Enter valid password");
    if (PASSWORD_PATTERN.test(password)) {
        console.log("valid Password",password);
    }
    else {
        console.log("Invalid Password");
    }
}

 }


module.exports = new Utility();