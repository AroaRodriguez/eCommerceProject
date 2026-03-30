sap.ui.define([
    "ecommerceproject/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ecommerceproject.controller.Detail", {
        
        onInit: function () {
            this.getRouter().getRoute("RouteDetail").attachPatternMatched(this.onObjectMatched, this);
        }, 

        onObjectMatched: function (oEvent){
            const sProductIndex = oEvent.getParameter("arguments").productIndex;
            const sPath = "/Home/cards/" + sProductIndex;
            
            this.getView().bindElement({
                path: sPath,
                model: "configModel",
                events: {
                    change: function(oEvent){
                        const oContext = oEvent.getSource().getBoundContext()
                        if (!oContext){
                            console.error("¡No se ha encontrado los datos para la ruta!");
                        }
                    }
                }
            });
        }
    });
});