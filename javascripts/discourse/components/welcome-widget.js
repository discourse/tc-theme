import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";

export default Component.extend({
  tagName: "",
  router: service(),

  @discourseComputed("router.currentRouteName")
  shouldDisplay(currentRouteName) {
    return currentRouteName === `discovery.${defaultHomepage()}`;
  },
});
