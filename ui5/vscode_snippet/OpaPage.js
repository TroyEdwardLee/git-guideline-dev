sap.ui.define(['sap/ui/test/Opa5', 'sap/ui/test/actions/Press'], function(
  Opa5,
  Press
) {
  'use strict';

  Opa5.createPageObjects({
    onThe${1:App}Page: {
      actions: {
        i${2:DoMyAction}: function() {
          return this.waitFor({
            id: 'controlId',
            viewName: '${4:sViewName}',
            actions: new Press(),
            errorMessage:
              'Was not able to find the control with the id controlId'
          });
        }
      },
      assertions: {
        iShould${3:DoMyAssertion}: function() {
          return this.waitFor({
            id: 'controlId2',
            viewName: '${4:sViewName}',
            success: function() {
              Opa5.assert.ok(false, 'Implement me');
            },
            errorMessage:
              'Was not able to find the control with the id controlId2'
          });
        }
      }
    }
  });
});
