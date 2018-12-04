# OPA5 Session

Table of Contents:

- [OPA5 Session](#opa5-session)
  - [Genernal](#genernal)
  - [Page Objects](#page-objects)
  - [Troubleshooting](#troubleshooting)
  - [Summary](#summary)
  - [Hands-on](#hands-on)
  - [Recording](#recording)

Slides:

[One Page Acceptance Tests slides](https://github.wdf.sap.corp/I074174/ASE/blob/master/materials/presentations_sapui_app.pdf)

## Genernal

- [online demo](https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/test/integration/opaTestsWithGherkinAndComponent.qunit.html)

- Write JavaScript-based acceptance tests with OPA5:

  - It hides asynchronity by polling
  - Eases access to SAPUI5 elements
  - Foster clean/readable tests
  - Helpful for testing
    - user interactions
    - integration with SAPUI5
    - navigation
    - data binding

- Terms

  - Methodology view
    - Product Backlog
    - Sprint Backlog
    - User Story
  - UI5 technique view
    - Feature
    - Scenario
    - Journey
    - Module
  - TDD

- A glance at OPA5

  - [Getting Started with OPA5](https://sapui5.hana.ondemand.com/#/topic/22f175e7084247bc896c15280af9d1dc)

- OPA gives you the following three objects

  - Given=arrangements
  - When=actions
  - Then=assertions
  - [Class sap.ui.test.Opa5](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5)
    - Have a look into `constructor` of OPA5 from source code
    - `config` property of OPA provide arrangements(Given), actions(When) and assertions(Then).

- [waitFor](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5/methods/waitFor)
  - [Retrieving Controls](https://github.wdf.sap.corp/I074174/ems-dev/blob/019897bcf05efad72ad1bbff7c535558cb9bf48a/ui5/OPA5.md#retrieving-controls)
  - [Cookbook for OPA5](https://sapui5.hana.ondemand.com/#/topic/ce4b180d97064ad088a901b53ed48b21)
  - [Simulating User Interactions on Controls](https://github.wdf.sap.corp/I074174/ems-dev/blob/master/ui5/OPA5.md#simulating-user-interactions-on-controls)

## Page Objects

A page object:

- represents a significant part of the app(e.g.aview)
- knows about locators
- groups actions and assertions of this part at one place

Furhter:

- [sap.ui.test.Opa5.createPageObjects](https://sapui5.hana.ondemand.com/#/api/sap.ui.test.Opa5/methods/sap.ui.test.Opa5.createPageObjects), have a look into source code
- Question: how can we let all page object have same method?
- [Structuring OPA Tests With Page Objects](https://github.wdf.sap.corp/I074174/ems-dev/blob/019897bcf05efad72ad1bbff7c535558cb9bf48a/ui5/OPA5.md#structuring-opa-tests-with-page-objects)

## Troubleshooting

- [Pitfalls and Troubleshooting](https://github.wdf.sap.corp/I074174/ems-dev/blob/019897bcf05efad72ad1bbff7c535558cb9bf48a/ui5/OPA5Troubleshooting.md)

## Summary

- [OPA5](./OPA5.md)

## Hands-on

- [Tutorial: Testing](https://sapui5.hana.ondemand.com/#/topic/291c9121e6044ab381e0b51716f97f52.html), find [github repo](https://github.wdf.sap.corp/I074174/sap.ui.demo.bulletinboard)
- [Opa5 Samples](https://sapui5.hana.ondemand.com/#/entity/sap.ui.test.Opa5)
- [Demo App - Shopping Cart](https://github.wdf.sap.corp/I074174/shopping-cart), find more [demo apps](https://sapui5.hana.ondemand.com/#/demoapps)

## Recording

- [OPA5 Session Recording for this session](https://sap.apj.pgiconnect.com/p8yl19do5t1/)
