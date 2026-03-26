sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
    "use strict";

    return Controller.extend("ecommerceproject.controller.BaseController", {

        // --- 1. Atajo para obtener el Router ---
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        // --- 2. Atajo para obtener Modelos ---
        getModel: function (sName) {
            return this.getView().getModel(sName);
        },

        // --- 3. Atajo para obtener textos de traducción (i18n) ---
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        // --- 4. Función GLOBAL para el botón "Volver" ---
        onNavBack: function (sFallbackRoute) {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo(sFallbackRoute, {}, true);
            }
        }, 
        // --- NUEVA FUNCIÓN GENÉRICA PARA NAVEGAR ---
        /**
         * Navega a una ruta específica.
         * @param {string} sName - El nombre de la ruta (ej. "RouteDetail")
         * @param {object} [oParameters] - Parámetros opcionales (ej. { productIndex: 1 })
         * @param {boolean} [bReplace] - Si es true, reemplaza el historial actual
         */
        navTo: function (sName, oParameters, bReplace) {
            this.getRouter().navTo(sName, oParameters, bReplace);
        },

    });
});