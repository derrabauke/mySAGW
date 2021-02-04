import { setupTest } from "ember-qunit";
import { module, test } from "qunit";

module("Unit | Model | email", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("email", {});
    assert.ok(model);
  });
});
