sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.demo.b74sapui5app.controller.View1", {
        onInit() {
        },
       

        onAdd: function () {
            var num1 = this.getView().byId("number1").getValue();
            var num2 = this.getView().byId("number2").getValue();
            var res = parseInt(num1) + parseInt(num2);
            this.getView().byId("result").setValue(res);
        },

        onSubtract: function () {
            var num1 = this.getView().byId("number1").getValue();
            var num2 = this.getView().byId("number2").getValue();
            var res = parseInt(num1) - parseInt(num2);
            this.getView().byId("result").setValue(res);
        },
        onMultiply: function () {
            var num1 = this.getView().byId("number1").getValue();
            var num2 = this.getView().byId("number2").getValue();
            var res = parseInt(num1) * parseInt(num2);
            this.getView().byId("result").setValue(res);
        },
        onDivide: function () {
            var num1 = this.getView().byId("number1").getValue();
            var num2 = this.getView().byId("number2").getValue();

            if (num2 === 0) {
                MessageBox.error("Division by zero is not allowed.");

            }
            var res = num1 / num2;
            this.getView().byId("result").setValue(res);
        }


    });
});