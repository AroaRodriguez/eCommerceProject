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

        /**
         * Obtiene el índice de la ruta de un elemento pulsado (ej. de "/Home/cards/2" saca "2")
         * @param {sap.ui.base.Event} oEvent - El evento del clic (press)
         * @param {string} [sModelName] - El nombre del modelo (opcional, ej. "configModel")
         * @returns {string} El índice final de la ruta
         */
        getIndexFromEvent: function (oEvent, sModelName) {
            const oContext = oEvent.getSource().getBindingContext(sModelName);
            return oContext ? oContext.getPath().split("/").pop() : null;
        },

        /**
         * Obtiene el valor de una propiedad específica del elemento pulsado
         * @param {sap.ui.base.Event} oEvent - El evento del clic
         * @param {string} sProperty - El nombre del campo en el JSON (ej. "title")
         * @param {string} [sModelName] - El nombre del modelo (opcional)
         * @returns {any} El valor de esa propiedad
         */
        getPropertyFromEvent: function (oEvent, sProperty, sModelName) {
            const oContext = oEvent.getSource().getBindingContext(sModelName);
            return oContext ? oContext.getProperty(sProperty) : null;
        },

        // --- Atajo para obtener textos de traducción (i18n) ---
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
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

        // --- GESTOR DE FRAGMENTOS GENÉRICO ---
        getDialog: async function (sFragmentName) {
            this._oDialogs = this._oDialogs || {};
            if (!this._oDialogs[sFragmentName]) {
                this._oDialogs[sFragmentName] = await this.loadFragment({
                    name: sFragmentName
                });
            }
            return this._oDialogs[sFragmentName];
        }

    });
});