import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-data/tests/helpers';
import { isTesting } from '@embroider/macros';

module('Acceptance | isTesting', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    assert.true(isTesting(), 'isTesting should be true');
  });
});
