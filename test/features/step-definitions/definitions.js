'use strict';

module.exports = function() {

    var actualResponseCode = undefined;
    var actualBody = undefined;

    var port = process.env.PORT || '8081';
    var host = process.env.HOST || 'localhost';

    this.Given(/^I am a user of the helloworld service$/, function (callback) {
        callback();
    });

    this.When(/^I make a GET request$/, function (callback) {
        var request = require("request");
        var url = 'http://' + host + ':' + port + '/';
        request(url, function (error, response, body) {
           if (error) {
               callback(new Error(error));
           };
           if (response) {
               actualResponseCode = response.statusCode;
           };
           if (body) {
               actualBody = body;
           };
           callback();
        });
    });

    this.Then(/^I should receive a (\d+) status code$/, function (expectedStatusCode, callback) {
        if (actualResponseCode == expectedStatusCode) {
            callback();
        };
        callback(new Error("Status code is wrong"));
    });

    this.Then(/^I should receive 'Hello World' in the body$/, function (callback) {
        if (actualBody == 'Hello World') {
            callback();
        }
        callback(new Error("Body is incorrect: " + actualBody))
    });
};

