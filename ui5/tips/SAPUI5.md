# Tips of SAPUI5

## General

- [Modules and Dependencies](https://sapui5.hana.ondemand.com/#/topic/91f23a736f4d1014b6dd926db0e91070)

  - A module is a JavaScript file that can be loaded and executed in a browser. There are no rules or definitions what code belongs to a module, and what code does not. The content bundled in a module is up to the developer, but typically the content has a common topic, such as forming a `JavaScript class` or `namespace` or the `contained functions address a specific topic`, for example client to server communication or mathematical functions.
  - Do use `sap.ui.define` and `sap.ui.require` for modularization, helps to ensure an asynchronous loading of resources.
  - Many code samples in the SAPUI5 documentation use the `sap.ui.require` syntax even though we could also have used `sap.ui.define`.
  - `jQuery.sap.define` and `jQuery.sap.require` are synchronous and considered as "bad practice". Be aware, that synchronous requests are already deprecated in some modern browsers and may not be supported in future.
  - Some modules can be required dynamically on user interaction.

    ```javascript
    sap.ui.define(['sap/m/Input'], function(Input) {
    var MyControl = function(){};
    MyControl.prototype.onSavePress = function () {
        // dynamically load a dialog once it is needed
        sap.ui.require(['sap/m/Dialog'], function(Dialog) {
            var oDialog = new Dialog();
            oDialog.open();
           ]});
        };
        return MyControl;
    });
    ```

  - In web applications, modules can be located in different locations, such as servers and web apps. The `jQuery.sap.registerModulePath` function associates a module name prefix with a URL prefix. All modules whose names start with the module name prefix are loaded from the registered URL instead of the standard resource root URL.

    ```javascript
    // redirect the 'my.webapp' package to the local web app
    jQuery.sap.registerModulePath(
      'my.webapp',
      '/my-webapp/resources/my/webapp/'
    );

    jQuery.sap.registerModulePath('my.webapp', 'http://my.company/shared/');
    ```

- Get Module(Resource) Real Path

  Constructs a URL to load the module with the given name and file type (suffix).

  Searches the longest prefix of the given module name for which a registration exists (see `jQuery.sap.registerModulePath`) and replaces that prefix by the registered URL prefix.

  ```javascript
  var oModel = new JSONModel(
    jQuery.sap.getModulePath('sap.ui.demo.mock', '/supplier.json')
  );

  var oModel = new JSONModel();
  oModel.loadData(
    jQuery.sap.getModulePath('sap/ui/demo/mock', '/supplier.json'),
    null,
    false
  );
  ```

- Define a namespace

  - refer to namespace `sap.ui` from module `sap/ui/Global`

- logging, using below instead of console.

  ```javascript
  jQuery.sap.log.error();
  jQuery.sap.log.info();
  jQuery.sap.log.warning();
  jQuery.sap.log.debug();
  ```

- Id

  - [Support for Unique IDs](https://sapui5.hana.ondemand.com/#/topic/91f28be26f4d1014b6dd926db0e91070.html)
  - If the ID is created during instantiation of the control, it is unique by default. If you create further controls during runtime, the controller creates a unique ID by calling the oController.createId("ID") method. These methods add the necessary prefix to the ID.
  - byId and createId, `this.getView().byId` return element by relative ID.

    Source codes of `sap.ui.core.mvc.Controller` as following:

    ```javascript
    Controller.prototype.byId = function(sId) {
      return this.oView ? this.oView.byId(sId) : undefined;
    };
    Controller.prototype.createId = function(sId) {
      return this.oView ? this.oView.createId(sId) : undefined;
    };
    ```

  - `sap.ui.getCore().byId()` return element by absolute ID

## Control

## View

- Escape characters that have a special meaning in XML (like <, or &) when they occur in a property value. Use XML entities instead (like `&lt;` instead of a <, or `&amp;` instead of &).
- Message text with paramters

  ```xml
  <TextView text="({parts:[{path: 'i18n>MY_TEXT'},
                            {path: '/my_data'},
                            {path: '/my_second_data'}
                           ],
                 formatter: 'jQuery.sap.formatMessage'})"/>
  ```

## Fiori Launchpad

- Get Shell Contoller. `sap.ui.getCore().byId('mainShell').getController()`
- Using `sap.ushell.services.*` instead of `sap.ushell.Container.getService("*")` works well, such as `sap.ushell.services.AppConfiguration.getMetadata().title`
- Get link href(URL)

  ```javascript
  //href for app internal navigation
  Formatter.orderDetailLink = function(sRouteName, oParameter) {
    return this.getOwnerComponent()
      .getRouter()
      .getURL(sRouteName, oParameter);
  };

  //href of cross app navigation
  Formatter.customerDetailLink = function(sAppHash) {
      //Example: hrefForAppSpecificHash("View1/details/0/") returns #SemanticObject-action&/View1/details/0/
      return sap.ushell.services.CrossApplicationNavigation.hrefForAppSpecificHash(sAppHash);
    }
  };
  ```

## OPA

- OPA waitfor logic

  From below logic of `waitfor`, you should be care of that if you set `searchOpenDialogs` to true, if the `id, viewName, controlType` paramaters will not take effect.

  ```javascript
  if (oOptions.searchOpenDialogs) {
    vResult = this.getAllControlsInContainer(
      $('#sap-ui-static'),
      oOptions.controlType,
      oOptions.sOriginalControlType,
      'the static UI area'
    );
  } else if (oOptions.viewName) {
    vResult = this.getControlInView(oOptions);
  } else if (oOptions.id) {
    vResult = this.getControlByGlobalId(oOptions);
  } else if (oOptions.controlType) {
    vResult = this.getAllControls(
      oOptions.controlType,
      oOptions.sOriginalControlType
    );
  } else {
    vResult = this.getAllControls();
  }
  ```
 - Set Karma browser size
 
    In Gruntfile.js, add below settings:

    ```javascript
    grunt.config.set('karma.options.browsers', ['desktop']);
    grunt.config.set('karma.options.customLaunchers', {
      desktop: {
        base: 'Chrome',
        flags: ['--window-size=1920,1080']
      }
    });
    ```
 
