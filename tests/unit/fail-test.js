import { module, test } from 'qunit';

module('failing test', function() {
  test('it fails', function(assert) {
    assert.ok(false);
  });
});

