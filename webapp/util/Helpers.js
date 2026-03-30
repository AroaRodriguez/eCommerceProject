sap.ui.define([], function () {
    "use strict";
    return {
        deepClone: function (oData) {
            if (!oData) return null;
            return JSON.parse(JSON.stringify(oData));
        }
    };
});