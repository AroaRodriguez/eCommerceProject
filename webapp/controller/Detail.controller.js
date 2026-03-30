sap.ui.define([
    "ecommerceproject/controller/BaseController",
    "ecommerceproject/util/Helpers", 
    "sap/ui/model/json/JSONModel", 
    "sap/m/MessageToast", 
    "ecommerceproject/util/Validator"

], function (BaseController, Helpers, JSONModel,MessageToast,Validator) {
    "use strict";

    return BaseController.extend("ecommerceproject.controller.Detail", {
        
        onInit: function () {
            this.getRouter().getRoute("RouteDetail").attachPatternMatched(this.onObjectMatched, this);
            this.getView().setModel(new JSONModel({}), "editModel");
            
        }, 

        onObjectMatched: function (oEvent){
            const sProductIndex = oEvent.getParameter("arguments").productIndex;
            this.sPath = "/Home/cards/" + sProductIndex;
            
            this.getView().bindElement({
                path: this.sPath,
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
        }, 

        //Función para abrir el dialogo y editar. 
        onOpenEditDialog: async function() {
            const oCurrentData = this.getModel("configModel").getProperty(this.sPath);
            const oClonedData = Helpers.deepClone(oCurrentData);
            
            this.getModel("editModel").setData(oClonedData);

            const oDialog = await this.getDialog ("ecommerceproject.fragment.EditProduct");
            oDialog.open(); 
        }, 

        //Función guardar cambios nuevos

        onSaveEdit: function() {
            //relacionamos la constante con la vista. 
            const oInputName = this.byId("InptEdit1");
            const oInputPrice = this.byId("InptEdit2");
            //declaracion + llamada a metodo resource del base controller, para los mensajes sean en el properties
            const sMessageName = this.getResourceBundle().getText("nameEditFail");
            const sMessagePrice = this.getResourceBundle().getText("priceEditFail");
            const sMessageError = this.getResourceBundle().getText("ErrorMessage");
            const sMessageUpdate = this.getResourceBundle().getText("SucessUpdate");

            //declaramos y llamamos a la funcion de la clase validator
            const bIsNameValid = Validator.validateRequiredInput(oInputName, sMessageName);
            const bIsPriceValid = Validator.validatePrice(oInputPrice, sMessagePrice);
            //Si alguno de los dos no es valido, que muestre el mensaje. 
            if (!bIsNameValid|| !bIsPriceValid) {
                MessageToast.show(sMessageError);
                return;
            }
            
            const oEditedData = this.getModel("editModel").getData();
            this.getModel("configModel").setProperty(this.sPath, oEditedData);

            MessageToast.show(sMessageUpdate);
            this.onCloseEdit();

        }, 

        //Cerrar dialogo

        onCloseEdit: async function() {
            const oDialog = await this.getDialog("ecommerceproject.fragment.EditProduct");
            oDialog.close();
            
        }


    });
});