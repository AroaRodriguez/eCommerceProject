sap.ui.define([], function () {
    "use strict";

    return {
        /**
         * Comprueba si un campo de texto está vacío.
         * Si está vacío, lo pinta de rojo y muestra un mensaje.
         * @param {sap.m.InputBase} oInput - El control a validar
         * @param {string} sErrorMessage - El mensaje de error a mostrar
         * @returns {boolean} true si es válido, false si hay error
         */
        validateRequiredInput: function (oInput, sErrorMessage) {
            const sValue = oInput.getValue();
            
            // Si no hay valor o son solo espacios en blanco...
            if (!sValue || sValue.trim() === "") {
                oInput.setValueState("Error");
                oInput.setValueStateText(sErrorMessage);
                return false;
            } else {
                oInput.setValueState("None"); // Lo devuelve a su estado normal
                return true;
            }
        },

        /**
         * Comprueba si el valor numérico es válido (mayor que 0)
         * @param {sap.m.Input} oInput - El control del precio
         * @returns {boolean}
         */
        validatePrice: function (oInput, sErrorMessage) {
            const sValue = oInput.getValue();
            
            if (!sValue || isNaN(sValue) || parseFloat(sValue) <= 0) {
                oInput.setValueState("Error");
                oInput.setValueStateText(sErrorMessage);
                return false;
            } else {
                oInput.setValueState("None");
                return true;
            }
        }
    };
});