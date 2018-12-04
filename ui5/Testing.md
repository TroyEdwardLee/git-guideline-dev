# SAPUI5 Testing

*It will be better if you have the concept of ASE. if not, see [here](https://github.wdf.sap.corp/I074174/ASE).*

## Testing

![Testing pyramid](/img/Testing_pyramid.png)

![TDD](/img/tdd.png)

Slides about [QUnit & Test Isolation & OPA5 & Test Smell](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)

## QUnit

- [QUnit Slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)
- [QUnit API](http://api.qunitjs.com/)
- [Unit Testing with QUnit](https://sapui5.hana.ondemand.com/#/topic/09d145cd86ee4f8e9d08715f1b364c51)
- [Unit Testing](https://wiki.wdf.sap.corp/wiki/display/ASE/Unit+Testing)
- [How to Test SAPUI5 Controls with QUnit](https://sapui5.hana.ondemand.com/#/topic/a6b0657d226343da81ad96632cd1bd83)

### FIRST Principles

- *Fast:* Your test cases should be very fast to execute, so running them all should not take more than a few seconds for a small application.

- *Independent:* You should be able to run your test cases in any order or even in parallel. Tests must not have any order-of-run dependency.

- *Repeatable:* The result of the test case should always be the same, no matter how many times you have executed it before and in which system you do it. Repeatable tests do not depend on external services or resources that might not be available and do not depend on customizing settings, which might be different in the test systems.

- *Self-validating:* The test tells you if it passed or failed. There should not be a need for someone to examine the results. Failing tests should pinpoint the defect location.

- *Timely:* Write tests first to reach testable production code. This is where Test Driven Development (TDD) comes in to place and this is a key aspect to get high value and the full benefit out of unit testing.

### Arrange Act Assert Pattern

```javascript
QUnit.test("Should do Something", function (assert) {
    // Arrange

    // System under Test
    var oMyControl = new nameSpace.myControl({
    });

    // Act

    // Assert

    // Cleanup
    oMyControl.destroy();
});
```

#### Arrange

In Arrange, you should set up the dependencies and options you need for your System under Test.

Examples:

- The constructor object of your control
- Sinon spies/stubs and mocks (dependencies of your System under Test)
- Model

#### System under test

In System under Test, you should create your control and you should also render it if you want to test the rendering.

#### Act

Ideally, this part is only one single line of code executing the function you want to test.

#### Assert

This part may contain multiple statements of QUnit assertions, but ideally not too many in total.

Make sure that you also test negative paths, not only the expected ones.

Optional: Cleanup

Here you should destroy all the controls/models you created.

If you don't use Sinon sandboxes, revert all the spies/stubs/mocks.

## Sinon

- [Test Isolation slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)
- [Sinon Part slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)
- [SINON.JS](http://sinonjs.org/)
- [Sinon入门](https://blog.kazaff.me/2016/11/11/%E8%AF%91-Sinon%E5%85%A5%E9%97%A8%EF%BC%9A%E5%88%A9%E7%94%A8Mocks%EF%BC%8CSpies%E5%92%8CStubs%E5%AE%8C%E6%88%90javascript%E6%B5%8B%E8%AF%95/)
- [Sinon.JS: Spies, Stubs, Mocks, Faked Timers, and XHR](https://sapui5.hana.ondemand.com/#/topic/457eaada68a24187858fd5e8b21a4892)

Sinon splits test-doubles into three types:

- `Spies`, which offer information about function calls, without affecting their behavior
- `Stubs`, which are like spies, but completely replace the function. This makes it possible to make a stubbed function do whatever you like — throw an exception, return a specific value, etc
- `Mocks`, which make replacing whole objects easier by combining both spies and stubs

In addition, Sinon also provides some other helpers:

- `Fake timers`, which can be used to travel forwards in time, for example triggering a setTimeout
- `Fake XMLHttpRequest and server`, which can be used to fake Ajax requests and responses

## OPA5

- [One Page Acceptance Tests slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)
- [Integration Testing with One Page Acceptance Tests (OPA5)](https://sapui5.hana.ondemand.com/#/topic/2696ab50faad458f9b4027ec2f9b884d)
- [Class sap.ui.test.Opa5](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5)

Helpful for testing:

- user interactions
- integration with SAPUI5
- navigation
- data binding

OPA gives you the following three objects:

- Given = arrangements
- 􏰀When = actions
- 􏰀Then = assertion

## Mock Server

- [Mock Server](https://sapui5.hana.ondemand.com/#/topic/69d3cbd4150c4ffb884e788f7f60fd93)

## Sample Application

- [Demo App - Shopping Cart](https://github.wdf.sap.corp/I074174/shopping-cart), find more [demo apps](https://sapui5.hana.ondemand.com/#/demoapps)
- [Tutorial: Testing](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52.html), find [github repo](https://github.wdf.sap.corp/I074174/sap.ui.demo.bulletinboard)
- [Source code of OpenUI5](https://github.com/SAP/openui5)
- Actual projects [GRC-DPP/questionnaire](https://github.wdf.sap.corp/GRC-DPP/questionnaire/tree/master/ui/templates-app/test)

*To-Do: Find more samples or best practices for reference. Detailing samples for stub, spy and scenario, etc.*

## Test Smell

- [Test Smells slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)
- [Write Maintainable and Readable Tests](https://wiki.wdf.sap.corp/wiki/display/ASE/Write+Maintainable+and+Readable+Tests)

## Reference Resources

- [QUnit & Test Isolation & OPA5 & Test Smell](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)