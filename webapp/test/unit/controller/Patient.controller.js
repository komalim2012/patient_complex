/*global QUnit*/

sap.ui.define([
	"patientdetails/controller/Patient.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Patient Controller");

	QUnit.test("I should test the Patient controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
