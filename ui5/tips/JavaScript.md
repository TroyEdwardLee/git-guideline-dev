# Tips of JavaScript

- call() , apply() and bind()

  - You can use call()/apply() to invoke the function immediately
  - bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. So bind() can be used when the function needs to be called later in certain events when it's useful
  - bind will return new function, so be care of this for event hanlder register and remove register.

    ```javascript
    var fnTest = function() {};
    //undefined;
    fnTest.bind(this) === fnTest.bind(this);
    //false;
    ```
