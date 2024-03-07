import { withPluginApi } from "discourse/lib/plugin-api";
import HeaderButton from "../components/header-button";

export default {
  name: "theme-creator-header-button",

  initialize() {
    withPluginApi("1.29.0", (api) => {
      const currentUser = api.getCurrentUser();
      if (currentUser) {
        api.headerButtons.add("theme-creator", HeaderButton);
      }
    });
  },
};
