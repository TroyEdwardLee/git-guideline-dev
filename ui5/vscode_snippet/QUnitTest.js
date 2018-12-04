sap.ui.define(
  [
    'sap/ui/model/resource/ResourceModel',
    '../../../controller/App.controller',
    'sap/ui/thirdparty/sinon',
    'sap/ui/thirdparty/sinon-qunit'
  ],
  function(ResourceModel) {
    'use strict';

    QUnit.module('Module Name', {
      beforeEach: function() {
        // prepare something before each test
      },

      afterEach: function() {
        // clean up after each test
      }
    });

    QUnit.test('Should Test Description', function(assert) {
      // Arrange

      // Act

      // Unit under test

      // Assert
      assert.ok(false, 'Implement me');
    });
  }
);
