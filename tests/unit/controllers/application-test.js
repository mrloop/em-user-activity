import { module, test } from 'qunit';
import { setupTest } from 'my-data/tests/helpers';
import { isTesting } from '@embroider/macros';

module('Unit | Controller | isTesting', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    assert.true(isTesting(), 'isTesting should be true');
  });
});
