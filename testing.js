//let expect = require("chai").expect;
const utility=require('./utility')
const assert=require('chai').assert;


describe("test for first name ", function() {    
        it("should give true output", function() {    
            let firstname=utility.firstNameValidator('Avinash') ;
            assert.isTrue(firstname=='Avinash',"pass");
        });  
        it("should give flase output", function() {    
            let firstname=utility.firstNameValidator('Avinash') ;
            assert.isNotTrue(firstname=='avinash',"pass");
        });  
    });

describe("test for last name ", function() {    
        it("should give true output", function() {    
            let lastname=utility.lastNameValidator('Biradar') ;
            assert.isTrue(lastname=='Biradar',"pass");
        });  
        it("should give flase output", function() {    
            let lastname=utility.lastNameValidator('biradar') ;
            assert.isNotTrue(lastname=='biradar',"pass");
        });  
    });

describe("test for email ", function() {    
        it("should give true output", function() {    
            let Email=utility.emailValidator('Abc123.xyz@bl.co.in') ;
            assert.isNotNumber(Email=='Abc123.xyz@bl.co.in',"pass");
        });  
        it("should give true output", function() {    
            let Email=utility.emailValidator('Avinash123@gmail.com') ;
            assert.isNotNumber(Email=='Avinashb123@gmail.com',"pass");
        });  
        it("should give flase output", function() {    
            let Email=utility.emailValidator('avinashgmail.com') ;
            assert.isNotTrue(Email=='avinashgmail.com',"pass");
        });  
    });
describe("test for phone number  ", function() {    
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('91 9923886906') ;
            assert.isTrue(phoneNumber=='91 9923886906',"pass");
        });  
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('919923886906') ;
            assert.isTrue(phoneNumber=='919923886906',"pass");
        });  
        it("should give true output", function() {    
            let phoneNumber=utility.phoneValidator('91 6923886906') ;
            assert.isTrue(phoneNumber=='91 6923886906',"pass");
        });  
        it("should give flase output", function() {    
            let phoneNumber=utility.phoneValidator('91 1234567890') ;
            assert.isNotTrue(phoneNumber=='91 1234567890',"pass");
        });  
        it("should give flase output", function() {    
            let phoneNumber=utility.phoneValidator('91123') ;
            assert.isNotTrue(phoneNumber=='91123',"pass");
        });  
    });
describe("test for password ", function() {    
        it("should give true output", function() {    
            let Password=utility.passwordValidator('Abcdefgh@112a') ;
            assert.isTrue(Password=='Abcdefgh@112a',"pass");
        });  
        it("should give flase output", function() {    
            let Password=utility.passwordValidator('abcdefgh112a') ;
            assert.isNotTrue(Password=='abcdefgh112a',"pass");
        });  
    });
    
// describe("regex for the first name ", function() {
//     let myFirstNameRegex = /^[A-Z]{1}[a-z]{2,}$/
  
//     it("should work for first name regex", function() {
//         expect("Avinash").to.match(myFirstNameRegex);   
//         expect("Avinash").to.match(myFirstNameRegex);
//         expect("Avi").to.match(myFirstNameRegex);  
//     }); 
//     it("shouldn't work for first  name regex", function() {
//         expect("Av").not.to.match(myFirstNameRegex);
//         expect("av").not.to.match(myFirstNameRegex);
//         expect("avinash").not.to.match(myFirstNameRegex);
//         expect("").not.to.match(myFirstNameRegex);
//     });
// });

// describe(" regex for the Last name ", function() {
//     let myLastNameRegex = /^[A-Z]{1}[a-z]{2,}$/
//     it("should work for last name regex", function() {
//         expect("Biradar").to.match(myLastNameRegex);
//         expect("Light").to.match(myLastNameRegex);   
//         expect("Bir").to.match(myLastNameRegex);  
//     }); 
//     it("shouldn't work for last name regex", function() {
//         expect("Bi").not.to.match(myLastNameRegex);
//         expect("bi").not.to.match(myLastNameRegex);
//         expect("biradar").not.to.match(myLastNameRegex);
//         expect("").not.to.match(myLastNameRegex);
//     });
// });

// describe("regex for the email ", function() {
//     let emailPatternRegex = /^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$/
//     it("should work for email regex", function() {
//         expect("abc.xyz@bl.co.in").to.match(emailPatternRegex);
//         expect("Avinash123@gmail.com").to.match(emailPatternRegex);   
//     }); 
//     it("shouldn't work for email regex", function() {
//         expect("avinashgmail.com").not.to.match(emailPatternRegex);
//         expect("@gmail.com").not.to.match(emailPatternRegex);
//     });
// });

// describe("should work for phone number regex ", function() {
//     let phoneNumber= /^91[ ]?[6-9]{1}[0-9]{9}$/;
//     it("should work for email regex", function() {
//         expect("919960238192").to.match(phoneNumber);
//         expect("91 9960238192").to.match(phoneNumber);   
//     });    
//    it("shouldn't work for phone number regex", function() {
//         expect("91 9960238").not.to.match(phoneNumber);
//         expect("99602").not.to.match(phoneNumber);  
//         expect("1234567890").not.to.match(phoneNumber);   
//     }); 
// });

// describe("should work for Password regex ", function() {
// let password= /(?=.*[0-9])(?=.*[A-Z]).{8,40}/;
//     it("should work for email regex", function() {
//         expect("9Abcdefgh@112a").to.match(password);
//         expect("Avinash@123").to.match(password);   
//     });    
//    it("shouldn't work for phone number regex", function() {
//         expect("123456@").not.to.match(password);
//         expect("abcdef123").not.to.match(password);  
//         expect("@@@@@@@").not.to.match(password);   
//     }); 
// });

