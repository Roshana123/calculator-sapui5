sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("com.demo.b74sapui5app.controller.View1", {
        onInit() {
            this._number1 = this.getView().byId("number1");
            this._number2 = this.getView().byId("number2");
            this._result = this.getView().byId("result");
        },

        _getValues() {
            const num1 = parseFloat(this._number1.getValue());
            const num2 = parseFloat(this._number2.getValue());

            if (isNaN(num1) || isNaN(num2)) {
                MessageBox.error(this.getView().getModel("i18n").getResourceBundle().getText("invalidInput"));
                return null;
            }

            return { num1, num2 };
        },

        onAdd() {
            const values = this._getValues();
            if (!values) { return; }
            this._result.setValue(values.num1 + values.num2);
        },

        onSubtract() {
            const values = this._getValues();
            if (!values) { return; }
            this._result.setValue(values.num1 - values.num2);
        },

        onMultiply() {
            const values = this._getValues();
            if (!values) { return; }
            this._result.setValue(values.num1 * values.num2);
        },

        onDivide() {
            const values = this._getValues();
            if (!values) { return; }

            if (values.num2 === 0) {
                MessageBox.error(this.getView().getModel("i18n").getResourceBundle().getText("divisionByZero"));
                return;
            }

            this._result.setValue(values.num1 / values.num2);
        }
    });
});