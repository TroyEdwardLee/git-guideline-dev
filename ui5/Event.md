# Event

SAPUI5 applications can have the following two event types:

* [Browser events](https://sapui5.hana.ondemand.com/#/topic/91f1b3856f4d1014b6dd926db0e91070): These events are fired by the browser; examples for browser events are click and blur.

    Example for explicit registration of browser events:

    ```JavaScript
    MyControl.prototype.onAfterRendering = function() {

            this.$().bind("click", jQuery.proxy(this.handleClick, this));  // could also be:  jQuery.sap.byId(this.getId).bind("click", jQuery.proxy(this.handleClick, this));
        }

        MyControl.prototype.onBeforeRendering = function() {
            this.$().unbind("click", this.handleClick);
        }

        MyControl.prototype.exit = function() {
            this.$().unbind("click", this.handleClick);
        }

        MyControl.prototype.handleClick = function(oEvent) {
            // do something...
        }
    ```

    Instead of explicitly registering for browser events, you can implement the event handler directly for certain common event types by using a naming convention for the handler method. SAPUI5 automatically registers event handlers for a list of commonly used event types on the root element of a complete tree of SAPUI5 controls

    Example for registering the event handler directly:

    ```JavaScript
    MyControl.prototype.onclick = function(oEvent) {
    // do something...
    }
    ```

    SAPUI5 also provides so-called pseudo events. Pseudo events are semantically enriched and can be handled by just implementing an `on<eventName>` method. They cannot be used with jQuery.bind(). By using pseudo events, you avoid additional checks for modifier keys in the event handler or for certain keycodes. For a list of Pseudo Events, see jQuery.sap.PseudoEvents.

* `Control events`: These events are fired by SAPUI5 controls. They contain more semantic information than browser events and relate to the control functionality. An example for a control event is when a browser's a click event on an icon in a panel header that triggers a maximize or minimize event of the control.
  
  * Attach and Detach Event, see [sample](./AttachAndDetach.html)
  * addEventDelegate

    Adds a delegate that listens to the events that are fired on this element (as opposed to events which are fired BY this element).

    *When this element is cloned, the same delegate will be added to all clones.* This behavior is well-suited for applications which want to add delegates that also work with templates in aggregation bindings. For control development the internal "addDelegate" method which does not clone delegates by default may be more suitable, as typically each control instance takes care of its own delegates.

    *To avoid double registrations, all registrations of the given delegate are first removed and then the delegate is added.*

    **Important:** If event delegates were added the delegate will still be called even if the event was processed and/or cancelled via `preventDefault` by the Element or another event delegate. `preventDefault` only prevents the event from bubbling. It should be checked e.g. in the event delegate's listener whether an Element is still enabled via `getEnabled`. Additionally there might be other things that delegates need to check depending on the event (e.g. not adding a key twice to an output string etc.).

    *[Extending Controls Behavior using addEventDelegate function](https://blogs.sap.com/2017/01/26/sapui5-extending-controls-behavior-using-addeventdelegate-function/)*

  * Handling Events in XML Views

    Names without dot are interpreted as a relative name; if nothing is found, they are interpreted as an absolute name. This variant is only supported for backward compatibility. Example:

    ```JavaScript
    press: "myHandler"
    -->
    if ( oController["myHandler"] ) {
        attachPress(oController["myHandler"], oController);
    } else {
        attachPress(jQuery.sap.getObject("myHandler"), oController);
    }
    ```

  * Navigation events
  
    ![Navigation Events](/img/navigation_events.png)

  * Reacting on User Input Events

    You register the handler and can then use the following functions of sap.ui.getCore():
    * attachFormatError
    * attachParseError
    * attachValidationError
    * attachValidationSuccess

    You can also register for these events directly on the control or any parent control where the event is fired. The corresponding event bubbles up to the Core if it is not canceled in the event handler.
