const readline = require('readline-sync')
let NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
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
}
module.exports = new Utility();