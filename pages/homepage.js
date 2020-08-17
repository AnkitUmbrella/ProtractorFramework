

var homepage = function () {
    let firsttext = element(by.model('first'));
    let secondtext = element(by.model('second'));
    let clickbutton = element(by.css('[ng-click="doAddition()"]'));
    let subtraction = element(by.cssContainingText('option', '-'));


    this.get = function (url) {
        browser.get(url)

    };



    this.EnterFirstnumber = function (firstNo) {

        firsttext.sendKeys(firstNo);
    };


    this.EnterSecondnumber = function (secondNo) {

        secondtext.sendKeys(secondNo);
    };

    this.GoButton = function () {

        clickbutton.click();
    };


    this.subtract = function () {
        subtraction.click();

    };


    this.verifyresult = function (results) {

        var output = element(by.cssContainingText('.ng-binding', results));

        expect(output.getText()).toEqual(results);


    };


};

module.exports = new homepage();
