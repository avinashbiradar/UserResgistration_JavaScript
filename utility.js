const readline = require('readline-sync')
 let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
 let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
 let PHONE_NUMBER_PATTERN = new RegExp("^91[ ]?[6-9]{1}[0-9]{9}$");
 let PASSWORD_PATTERN = new RegExp("(?=.*[0-9])(?=.*[A-Z]).{8,40}");
class Utility {
        firstNameValidator=(fname)=> {
            let  firstname = fname;
            let result=NAME_PATTERN.test(firstname);
            console.log(result);
            return result;
            // if (NAME_PATTERN_1.test(firstname)) {
            //     console.log("valid First Name:",firstname);
            // }
            // else {
            //     console.log("Invalid First Name ");
            //     this.firstNameValidator();
            
        }
        lastNameValidator=(lname)=> {
            let  lastname = lname;
            let result=NAME_PATTERN.test(lastname);
            console.log(result);
            return result;
            
            // if (NAME_PATTERN.test(lastname)) {
            //     console.log("valid Last Name: ",lastname);
            // }
            // else {
            //     console.log("Invalid Last Name ");
            //     this.lastNameValidator();
            // }
            }
        emailValidator=(email)=>{
            let  Email = email;
            let result=EMAIL_PATTERN.test(Email);
            console.log(result);
            return result;
            // email = readline.question("Enter valid email : ");
            // if (EMAIL_PATTERN.test(email)) {
            //     console.log("valid Email ",email);
            // }
            // else {
            //     console.log("Invalid Email ");
            //     this.emailValidator();
            // }
        }
        phoneValidator=(phone)=>{
            let  phoneNumber = phone;
            let result=PHONE_NUMBER_PATTERN.test(phoneNumber);
            console.log(result);
            return result;
            // phoneNumber=readline.question("Enter valid Phone Number ");
            // if (PHONE_NUMBER_PATTERN .test(phoneNumber)) {
            //     console.log("valid Phone Number ",phoneNumber);
            // }
            // else {
            //     console.log("Invalid Phone Number ");
            //     this.phoneValidator();
            // }
        }
        passwordValidator(password) 
        {
            let  Password = password;
            let result=PASSWORD_PATTERN.test(Password);
            console.log(result);
            return result;
        // password=readline.question("Enter valid password ");
        //     if (PASSWORD_PATTERN.test(password)) {
        //         console.log("valid Password ",password);
        //     }
        //     else {
        //         console.log("Invalid Password ");
        //         this.passwordValidator();
        //     }
        }

    }



module.exports = new Utility();