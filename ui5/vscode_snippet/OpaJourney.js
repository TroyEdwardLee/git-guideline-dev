sap.ui.define(
  [
    'sap/ui/test/opaQunit',
    //Pages
    'sap/ems/test/lib/integration/pages/Browser',
    'sap/ems/test/lib/integration/pages/NotFound',
    '../pages/App'
  ],
  function(opaTest) {
    'use strict';

    QUnit.module('Module Name');

    opaTest('Should assertion descrition when actions description ', function(
      Given,
      When,
      Then
    ) {
      //Arrangements
      Given.iStartTheApp();

      //Actions
      When.iLookAtTheScreen();
      When.onMyPageUnderTest.iDoMyAction();
      When.onTheBrowser.iPressOnTheBackwardsButton();

      //Assertions
      Then.onMyPageUnderTest
        .iShouldDoMyAssertion()
        .and.iTeardownMyUIComponent();
    });
  }
);
