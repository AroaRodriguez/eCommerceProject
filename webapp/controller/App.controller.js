sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("ecommerceproject.controller.App", {
      onInit() {
      },

    getMessageBox: function (sMessage) {
      sMessage = sMessage || this.getResourceBundle().getText("Vamos a iniciar nuestra aplicación");
      MessageBox.show(sMessage, {
          icon: MessageBox.Icon.Success,
          title: "Success",
      });
      return sMessage;  
    },
  });
});