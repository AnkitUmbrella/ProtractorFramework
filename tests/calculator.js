
var homepage = require('../pages/homepage')

describe("Demo Calculator Tests", function () {

    it("Addtion test", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();


        homepage.EnterFirstnumber('4');


        homepage.EnterSecondnumber('6');


        homepage.GoButton();

        browser.sleep(2000);


        homepage.verifyresult('10')



    });

    it("Subtraction", function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
       var width = 800;
var height = 600;
browser.driver.manage().window().setSize(width, height);

        homepage.EnterFirstnumber('7');

        homepage.EnterSecondnumber('3');

        homepage.subtract();

        homepage.GoButt();

        browser.sleep(3000);


        homepage.verifyresult('4')





    });


});