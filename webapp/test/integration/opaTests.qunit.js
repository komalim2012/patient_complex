/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["patientdetails/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
