sap.ui.define([
    "ecommerceproject/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ecommerceproject.controller.Detail", {
        
        onInit: function () {
            // ¡AQUÍ SÍ! El Detail escucha su propia ruta
            this.getRouter().getRoute("RouteDetail").attachPatternMatched(this.onObjectMatched, this);
        }, 

        onObjectMatched: function (oEvent){
            const sProductIndex = oEvent.getParameter("arguments").productIndex;
            const sPath = "/Home/cards/" + sProductIndex;
            
            this.getView().bindElement({
                path: sPath,
                model: "configModel"
            });
        }, 

        onNavBack: function() {
            // Usamos la función de tu BaseController para volver a la Home
            this.onNavBack("RouteHome"); // Llama a la función genérica de BaseController
        }
    });
});