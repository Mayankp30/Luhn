"use strict";
var mocha = require("mocha"),
	should = require("should"),
	luhn = require("../src/luhn");

describe("checkCreditCard function", function () {
	var number;

	it("should pass Australian BankCard - 5610591081018250", function () {
		number = "5610591081018250";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass Diners Club - 30569309025904", function () {
		number = "30569309025904";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass Discover - 6011111111111117", function () {
		number = "6011111111111117";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass JCB - 3530111333300000", function () {
		number = "3530111333300000";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass MasterCard - 5555555555554444", function () {
		number = "5555555555554444";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass MasterCard - 5105105105105100", function () {
		number = "5105105105105100";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should pass Visa - 4012888888881881", function () {
		number = "4012888888881881";
		luhn.checkCreditCard(number).should.be.true;
	});

	it("should not pass Invalid Visa - 4222222222220", function () {
		number = "4222222222220";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid JCB - 3530111333300001", function () {
		number = "3530111333300001";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid MasterCard - 5555555555554420", function () {
		number = "5555555555554420";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid MasterCard - 5105105105105199", function () {
		number = "5105105105105199";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid Australian BankCard - 5610591081018444", function () {
		number = "5610591081018444";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid Diners Club - 30569309025994", function () {
		number = "30569309025994";
		luhn.checkCreditCard(number).should.be.false;
	});

	it("should not pass Invalid Discover - 6011111111111127", function () {
		number = "6011111111111127";
		luhn.checkCreditCard(number).should.be.false;
	});
});