sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "ecommerceproject/controller/BaseController"
], function (Controller, BaseController) {
    "use strict";

    return BaseController.extend("ecommerceproject.controller.Home", {
        onInit() {
            this.getRouter().getRoute("RouteDetail").attachPatternMatched(this.onObjectMatched, this);
        }, 

        onCardPress: function (oEvent) {
            // 1. Averiguamos qué producto se ha pulsado
            const oBindingContext = oEvent.getSource().getBindingContext("configModel");
            const sItemIndex = oBindingContext.getPath().split("/").pop();

            // 2. Usamos nuestra función del BaseController para viajar
            this.navTo("RouteDetail", {
                productIndex: sItemIndex
            });
        }
    });
});