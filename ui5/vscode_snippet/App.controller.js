sap.ui.define(
  [
    'sap/ems/ui/app/${1:template}/common/BaseController',
    'sap/ui/model/json/JSONModel'
  ],
  function(BaseController, JSONModel) {
    'use strict';

    return BaseController.extend(
      'sap.ems.ui.app.${1:template}.controller.${0:$TM_FILENAME_BASE}',
      {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf sap.ems.ui.app.${1:template}.view.${0:$TM_FILENAME_BASE}
         */
        onInit: function() {
          BaseController.prototype.onInit.apply(this, arguments);
          this.getRouter()
            .getRoute('order')
            .attachMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function(oEvent) {
          this.setModel(new JSONModel({}));
        }
        /**
         * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
         * (NOT before the first rendering! onInit() is used for that one!).
         * @memberOf sap.ems.ui.app.${1:template}.view.${0:$TM_FILENAME_BASE}
         */
        //   onBeforeRendering: function() {},

        /**
         * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
         * This hook is the same one that SAPUI5 controls get after being rendered.
         * @memberOf sap.ems.ui.app.${1:template}.view.${0:$TM_FILENAME_BASE}
         */
        //   onAfterRendering: function() {},

        /**
         * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
         * @memberOf sap.ems.ui.app.${1:template}.view.${0:$TM_FILENAME_BASE}
         */
        //   onExit: function() {}
        /**
         * view-event-handler name pattern: handle[Name][Control Name][Event Name]
         */
        //   handleSaveButtonPress: function(oEvent) {}
      }
    );
  }
);
