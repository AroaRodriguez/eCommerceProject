sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "ecommerceproject/controller/BaseController", 
    "sap/m/MessageToast"
], function (Controller, BaseController, MessageToast) {
    "use strict";

    return BaseController.extend("ecommerceproject.controller.Home", {
        onInit() {
        }, 
        //Funcion para presionar la carta
        onCardPress: function (oEvent) {
            //Usamos función generica base controller para sacar el número de la carta.
           const sItemIndex = this.getIndexFromEvent(oEvent, "configModel");

            //Usamos nuestra función del BaseController para viajar a la siguiente pantalla
            this.navTo("RouteDetail", {
                productIndex: sItemIndex
            });
        }, 

        onAddToCardPress: function(oEvent) {
            //Llamamos la función generica para sacar el nombre del producto de la clase basecontroller
            const sProductName = this.getPropertyFromEvent(oEvent, "title", "configModel");
            //Llamamos a la función generica para el properties
            const sFinalMessage = this.getResourceBundle().getText("AddCart", [sProductName]);
            //Introducimos el mensaje de properties y la duración del mensaje. 
            MessageToast.show(sFinalMessage, {
                duration: 3000
            });
        }
    });
});