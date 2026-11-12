sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("ecommerceproject.controller.App", {
      onInit() {
      }, 
      getMessageToast: function (sMessageToast) {
        sMessageToast = sMessageToast || this.getResourceBundle().getText("Esto es una prueba de conflictos para identificar de diferentes ramas");
        MessageToast.show(sMessageToast, {
          duration: 3000
        });
      }, 

      getMessageBox: function (sMessage) {
        sMessage = sMessage || this.getResourceBundle().getText("Vamos a probar un mensaje de exito para identificar conflictos entre ramas");
        MessageBox.show(sMessage, {
          icon: MessageBox.Icon.SUCCESS,
          title: "Success",
        });
        return sMessage;
      },

    getMessageBox: function (sMessage) {
      sMessage = sMessage || this.getResourceBundle().getText("Vamos a iniciar nuestra aplicación");
      MessageBox.show(sMessage, {
          icon: MessageBox.Icon.INFORMATION,
          title: "Information",
      });
      return sMessage;  
    },
  });
});