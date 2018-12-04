# OPA5

- [Integration Testing with One Page Acceptance Tests (OPA5)](https://sapui5.hana.ondemand.com/#/topic/2696ab50faad458f9b4027ec2f9b884d)
- [Opa5 Samples](https://sapui5.hana.ondemand.com/#/entity/sap.ui.test.Opa5)
- [Class sap.ui.test.Opa5](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5)
- [Tutorial: Testing](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52.html), find [github repo](https://github.wdf.sap.corp/I074174/sap.ui.demo.bulletinboard)
- [Demo App - Shopping Cart](https://github.wdf.sap.corp/I074174/shopping-cart), find more [demo apps](https://sapui5.hana.ondemand.com/#/demoapps)

## [Getting Started with OPA5](https://sapui5.hana.ondemand.com/#/topic/22f175e7084247bc896c15280af9d1dc)

- Constructor and OPA

  ```javascript
  /**
  * Helps you when writing tests for UI5 applications.
  * Provides convenience to wait and retrieve for UI5 controls without relying on global IDs.
  * Makes it easy to wait until your UI is in the state you need for testing, e.g.: waiting for backend data.
  *
  * @class UI5 extension of the OPA framework
  * @extends sap.ui.base.Object
  * @public
  * @alias sap.ui.test.Opa5
  * @author SAP SE
  * @since 1.22
  */
  var Opa5 = Ui5Object.extend("sap.ui.test.Opa5",
      $.extend({},
          Opa.prototype,
          {
              constructor : function() {
                  Opa.apply(this, arguments);
              }
          }
      )
  );
  ```

- [waitFor](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5/methods/waitFor)
  - id & viewName & viewNamespace

    ```javascript
    this.waitFor({
        id: /my/,
        viewName: "myView"
    });
    ```
  - [matcher**s**](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.matchers)
    - The matchers are a pipeline
    - Check will not be called if the matchers filtered out all controls/values. Check/success will be called with all matching values as an input parameter. Matchers also can be define as an inline-functions.
  - controlType
    - It is usually combined with a viewName or searchOpenDialogs
    - If no control is matching the type, an empty array will be returned.

    ```javascript
    this.waitFor({
        controlType: "sap.m.Button",
        success: function (aButtons) {
            // aButtons is an array of all visible buttons
        }
    });
    ```
  - check
  - success, will get invoked after the following conditions are met:
    - One or multiple controls were found using controlType, Id, viewName. If visible is true (it is by default), the controls also need to be rendered.
    - The whole matcher pipeline returned true for at least one control, or there are no matchers
    - The check function returned true, or there is no check function

  - error, invoked when the timeout is reached and the check never returned true.
  - errorMessage, This message is displayed if Opa5 has reached its timeout before QUnit has reached it.

- extendConfig(sap.ui.test.Opa.config)
  - the global configuration of Opa. All of the global values can beoverwritten in an individual waitFor call. The default values are
    - arrangements: A new Opa instance
    - actions: A new Opa instance
    - assertions: A new Opa instance
    - timeout : 15 seconds, 0 for infinite timeout
    - pollingInterval: 400 milliseconds
    - debugTimeout: 0 seconds, infinite timeout by default. This will be used instead of timeout if running in debug mode.
  - extend it using sap.ui.test.Opa.extendConfig

- iStartMyUIComponent & iTeardownMyUIComponent
  - Please note that OPA5 tests can only run for a single UIComponent. You first have to tear down the current UIComponent before starting an OPA5 test for another UIComponen

- iStartMyAppInAFrame & iTeardownMyAppFrame
  - Starting the app can be a slow operation so it is not recommended to do this for every test. However, it is good practice to group tests in modules and restart the app in every module to enable faster debugging of larger suites.
  - Loading an iFrame is significantly slower than loading a component. It requires a separate page, in which the mocked app is started in an `SAP Fiori Launchpad sandbox`.

  ```javascript
  // returns the body of the app window wrapped in a jQuery object
  sap.ui.test.Opa5.getJQuery()("body");
  // returns the SAPUI5 OPA plugin object of the app window
  sap.ui.test.Opa5.getPlugin();
  // returns the SAPUI5 core interface of the app window
  sap.ui.test.Opa5.getWindow().sap.ui.getCore();
  // returns the Date in the app context
  sap.ui.test.Opa5.getWindow().Date();
  // the following test code will return false if the app is started in an iFrame
  new sap.ui.test.Opa5.getWindow().Date() instanceof Date
  ```

## [Cookbook for OPA5](https://sapui5.hana.ondemand.com/#/topic/ce4b180d97064ad088a901b53ed48b21)

## [Retrieving Controls](https://sapui5.hana.ondemand.com/#/topic/21aeff6928f84d179a47470123afee59)

- Retrieving a Control by Its ID

  ```javascript
  new sap.ui.test.Opa5().waitFor({
    id : "page-title",
    viewName : "Category",
    viewNamespace : "my.Application.",
    success : function (oTitle) {
        Opa5.assert.ok(oTitle.getVisible(), "the title was visible");
    }
  });
  new sap.ui.test.Opa5().waitFor({
    id : "productList",
    viewName : "Category",
    success : function (oList) {
        Opa5.assert.ok(oList.getItems().length, "The list did contain products");
    },
    timeout: 10
  });
  ```

- Retrieving a Control that Does Not Have an ID

  ```javascript
  return new Opa5().waitFor({
    controlType : "sap.m.ObjectHeader",
    viewName : "Detail",
    matchers : new sap.ui.test.matchers.PropertyStrictEquals({
        name : "title",
        value: "myTitle"
    }),
    success : function (aObjectHeaders) {
        Opa5.assert.StrictEqual(aObjectHeaders.length, 1, "was there was only one Object header with this title on the page");
        Opa5.assert.StrictEqual(aObjectHeaders[0].getTitle(), "myTitle", "was on the correct Title");
    }
  });
  ```

- More About Matchers

```javascript

  var oRootNode = getRootNode();
  return new Opa5().waitFor({
    controlType : "sap.ui.commons.TreeNode",
    matchers : new sap.ui.test.matchers.Ancest(oRootNode),
    success : function (aNodes) {
        Opa5.assert.notStrictEqual(aNodes.length, 0, "Found nodes in a root node")
    },
    errorMessage: "No nodes in a root node found"
  });

  return new Opa5().waitFor({
    controlType : "sap.ui.commons.TreeNode",
    matchers : function(oNode) {
        return oNode.$().hasClass("specialNode");
    },
    success : function (aNodes) {
        Opa5.assert.notStrictEqual(aNodes.length, 0, "Found special nodes")
    },
    errorMessage: "No special nodes found"
  });

  return new Opa5().waitFor({
    controlType : "sap.ui.commons.TreeNode",
    matchers : [
        function(oNode) {
            // returns truthy value - jQuery instance of control
            return oNode.$();
        },
        function($node) {
            // $node is a previously returned value
            return $node.hasClass("specialNode");
        }
    ],
    actions : function (oNode) {
        // oNode is a matching control's jQuery instance
        oNode.trigger("click");
    },
    errorMessage: "No special nodes found"
  });

  return new Opa5().waitFor({
    controlType: "sap.m.Input",
    // Get sap.m.Input which is associated with Label which have i18n text with key "CART_ORDER_NAME_LABEL"
    matchers: new sap.ui.test.matchers.LabelFor({ key: "CART_ORDER_NAME_LABEL", modelName: "i18n" }),
    // It will enter the given text in the matched sap.m.Input
    actions: new sap.ui.test.actions.EnterText({ text: "MyName" })
  });
```

- Searching for Controls Inside a Dialog

  ```javascript
  iPressOrderNow : function () {
      var oOrderNowButton = null;
      this.waitFor({
          searchOpenDialogs : true,
          controlType : "sap.m.Button",
          check : function (aButtons) {
              return aButtons.filter(function (oButton) {
                  if(oButton.getText() !== "Order Now") {
                      return false;
                  }

                  oOrderNowButton = oButton;
                  return true;
              });
          },
          actions: new sap.ui.test.actions.Press(),
          errorMessage : "Did not find the Order Now button"
      });
      return this;
  }
  ```

- Writing Nested Arrangements and Actions

  ```javascript
  iExpandRecursively : function() {
      return this.waitFor({
          controlType : "sap.ui.commons.TreeNode",
          matchers : new sap.ui.test.matchers.PropertyStrictEquals({
              name : "expanded", 
              value : false
          }),
          actions : function (oTreeNode) {
              if (oTreeNode.getNodes().length){
                  oTreeNode.expand();
                  that.iExpandRecursively()
              }
          },
          errorMessage : "Didn't find collapsed tree nodes"
      });
  }
  ```

## Structuring OPA Tests With Page Objects

```javascript
Opa5.createPageObjects({

    //give a meaningful name for the test code
    inThe <Page Object>: {
        //Optional: a class extending Opa5, with utility functionality
        baseClass: fnSomeClassExtendingOpa5,

        actions: {
            //place all arrangements and actions here
            <iDoSomething>: function () {
                //always return this or a waitFor to allow chaining
                return this.waitFor({
                    //see documentation for possibilities
                });
            }
        },
        assertions: {
            //place all assertions here
            <iCheckSomething>: function () {
                //always return this or a waitFor to allow chaining
                return this.waitFor({
                    //see documentation for possibilities
                });
            }
        }
    }
});
```

The method in your test finds all actions at the Given and When object, the assertions will be at the Then object. Everything is prefixed with the page object name.

```javascript
When.inThe<Page Object>.<iDoSomething>();
Then.inThe<Page Object>.<iCheckSomething>();
```

*Be careful with Opa5.extendConfig() if you give arrangements, actions, or assertions, all previously loaded page objects will be overwritten. So if you mix them, call extendConfig before loading the page objects. See the samples in the Demo Kit.*

```javascript
/**
 * Create a page object configured as arrangement, action and assertion to the Opa.config.
 * Use it to structure your arrangement, action and assertion based on parts of the screen to avoid name clashes and help to structure your tests.
 * @param {map} mPageObjects
 * @param {map} mPageObjects.<your-page-object-name> Multiple page objects are possible, provide at least actions or assertions
 * @param {function} [mPageObjects.<your-page-object-name>.viewName] When a viewName is given, all waitFors inside of the page object will get a viewName parameter.
 * @param {function} [mPageObjects.<your-page-object-name>.baseClass] Base class for the page object's actions and assertions, default: Opa5
 * @param {function} [mPageObjects.<your-page-object-name>.namespace] Namespace prefix for the page object's actions and assertions, default: sap.ui.test.opa.pageObject. Use it if you use page objects from multiple projects in the same test build.
 * @param {map} [mPageObjects.<your-page-object-name>.actions] Can be used as an arrangement and action in Opa tests. Only the test knows if an action is used as arrangement or action
 * @param {function} mPageObjects.<your-page-object-name>.actions.<your-action-1> This is your custom implementation containing one or multiple waitFor statements
 * @param {function} mPageObjects.<your-page-object-name>.actions.<your-action-2> This is your custom implementation containing one or multiple waitFor statements
 * @param {map} [mPageObjects.<your-page-object-name>.assertions] Can be used as an assertions in Opa tests.
 * @param {function} mPageObjects.<your-page-object-name>.assertions.<your-assertions-1> This is your custom implementation containing one or multiple waitFor statements
 * @param {function} mPageObjects.<your-page-object-name>.assertions.<your-assertions-2> This is your custom implementation containing one or multiple waitFor statements
 * @returns {map} mPageObject The created page object. It will look like this:

 * @public
 * @since 1.25
 */
Opa5.createPageObjects = function(mPageObjects) {
    //prevent circular dependency
    return PageObjectFactory.create(mPageObjects,Opa5);
};

```

## [Using autoWait Parameter](https://sapui5.hana.ondemand.com/#/topic/fb487ef0f9bf41a3afdbd0cc97368873)

## [Extensions for OPA5](https://sapui5.hana.ondemand.com/#/topic/9c22d2ada0414d97837b845e1e85ab86)

You can provide `application-aware assertions` that are called from the test but operate in the context of the application being tested.

## [Test Libraries for OPA5](https://sapui5.hana.ondemand.com/#/topic/a88a5e5529e54b3aa703a0b2a36cf7be)

Test libraries are a means of collaboration between app developers and reusable content providers.

## [Simulating User Interactions on Controls](https://sapui5.hana.ondemand.com/#/topic/8615a0b9088645ae936dbb8bbce5d01d)

- Simulating a Press Event

  ```javascript
  sap.ui.require(["sap/ui/test/opaQUnit", "sap/ui/test/actions/Press"], function(opaTest, Press) {

      opaTest("Should trigger a press event", function (Given, When, Then) {
          // Startup the application using Given

          When.waitFor({
              id: "myButton",
              actions: new Press()
          });

          // Assert what happened after pressing using Then

      });

  });
  ```

- Choosing an Item from sap.m.Select

  Here's an example showing how to choose an item from sap.m.Select or sap.m.ComboBox, using the waitFor function of OPA5, and the Press action:

  ```javascript
  sap.ui.require([
      "sap/ui/test/opaQUnit",
      "sap/ui/test/actions/Press",
      "sap/ui/test/matchers/Properties",
      "sap/ui/test/matchers/Ancestor"
  ],  function (opaTest, Press, Properties, Ancestor) {

      opaTest("Should trigger a press event", function (Given, When, Then) {
          // Startup the application using Given

          When.waitFor({
              id: "mySelect",
              actions: new Press(),
              success: function(oSelect) {
                  this.waitFor({
                      controlType: "sap.ui.core.Item",
                      matchers: [
                          new Ancestor(oSelect),
                          new Properties({ key: "Germany"})
                      ],
                      actions: new Press(),
                      errorMessage: "Cannot select Germany from mySelect"
                  });
              },
              errorMessage: "Could not find mySelect"
          });

          // Assert what happened after pressing using Then

      });

  });
  ```

- Entering Text into Input Fields

  ```javascript
  sap.ui.require(["sap/ui/test/opaQUnit", "sap/ui/test/actions/EnterText"], function(opaTest, EnterText) {

      opaTest("Should trigger a press event", function (Given, When, Then) {
          // Startup the application using Given

          When.waitFor({
              id: "myInput",
              // If you want you can provide multiple actions
              actions: [new EnterText({ text: "Hello " }), new EnterText({ text: " World" })]
          });

          // Assert what happened after pressing using Then
      });

  });
  ```

- Table Interaction

  A Table consists of columns (sap.m.Column) and rows. The rows, defined as sap.m.ColumnListItems, consist of cells. In order to utilize a stable locator which is not expected to change frequently, you can use a field/value combination to retrieve and interact with table items.

  The following example simulates a click on an item in a table. The name of the field can be found in the $metadata file of your odata-service.

  ```javascript
  iClickOnTableItemByFieldValue: function () {
      return this.waitFor({
          controlType: "sap.m.ColumnListItem",

          // Retrieve all list items in the table
          matchers: [function(oCandidateListItem) {
              var oTableLine = {};
              oTableLine = oCandidateListItem.getBindingContext().getObject();
              var sFound = false;

              // Iterate through the list items until the specified cell is found
              for (var sName in oTableLine) {
                  if ((sName === "Field Name") && (oTableLine[sName].toString() === "Cell Value")) {
                      QUnit.ok(true, "Cell has been found");
                      sFound = true;
                      break;
                  }
              }
              return sFound;
          }],

          // Click on the specified item
          actions: new Press(),
          errorMessage: "Cell could not be found in the table"
      });
  }
  ```

- Writing Your Own Action

  Since OPA5 uses JavaScript for its execution, you cannot use native browser events to simulate user events. Sometimes it's also hard to know the exact position where to click or enter your keystrokes since SAPUI5 controls don't have a common interface for that. If you find you're missing a certain built-in action, you can create your own actions very easily. Just provide an inline function as shown here:

  ```javascript
  sap.ui.require(["sap/ui/test/opaQUnit", "sap/ui/test/matchers/Properties"],function (opaTest, Properties) {

      opaTest("Should simulate press on the delete button", function (Given, When, Then) {
          // Startup the application using Given

          When.waitFor({
              id : "entryList",
              matchers : new Properties({ mode : "Delete"}),
              actions: function (oList) {
                  oList.fireDelete({listItem : oList.getItems()[0]});
              },
              errorMessage : "The delete button could not be pressed"
          });

          // Assert what happened after selecting the item using Then

      });

  });
  ```
