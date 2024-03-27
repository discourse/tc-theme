import Component from "@ember/component";
import { service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import discourseComputed from "discourse-common/utils/decorators";

export default Component.extend({
  tagName: "",
  router: service(),

  @discourseComputed("router.currentRouteName")
  shouldDisplay(currentRouteName) {
    return currentRouteName === `discovery.${defaultHomepage()}`;
  },
});
