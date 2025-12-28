sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], (Controller,JSONModel,MessageBox) => {
    "use strict";

    return Controller.extend("patientdetails.controller.Patient", {
        onInit() {
        },
        onSubmit(){
            var name=this.getView().byId("inptIdname").getValue();
            var dob=this.getView().byId("dpIddob").getValue();
            var gender=this.getView().byId("slctIdgndr").getSelectedKey();
            // var maritialstatus=this.getView().byId("slctIdsts").getSelectedKey();
            var address=this.getView().byId("inptIdadrs").getValue();
            var phno=this.getView().byId("inptIdphno").getValue();
            var email=this.getView().byId("inptIdemail").getValue();
            if(!/^[A-Za-z]+$/.test(name)){
                this.getView().byId("inptIdname").setValueState("Error");
                this.getView().byId("inptIdname").setValueStateText("Enter Name Please")
            }
            if(!dob){
                this.getView().byId("dpIddob").setValueState("Error");
                this.getView().byId("dpIddob").setValueStateText("Enter Date Of Birth")
            }
            if(!gender) {
                this.getView().byId("slctIdgndr").setValueState("Error");
                this.getView().byId("slctIdgndr").setValueStateText("Please Select Gender");
            }
            if (!/^[0-9]{10}$/.test(phno)) {
                this.getView().byId("inptIdphno").setValueState("Error");
                this.getView().byId("inptIdphno").setValueStateText("Enter Phone number");
            } 
            if (!/^[A-Za-z0-9@.]+$/.test(email)) {
                this.getView().byId("inptIdemail").setValueState("Error");
                this.getView().byId("inptIdemail").setValueStateText("Enter Valid Email ID");
            }
        }
    });
});