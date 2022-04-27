import { withPluginApi } from "discourse/lib/plugin-api";
import { h } from "virtual-dom";
import { iconNode } from "discourse-common/lib/icon-library";

export default {
  name: "theme-creator-header-button",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      let strings = [];

      strings["tc_intro"] = {
        bottom_section: {
          section_2: {
            cta_link: "/my/themes",
            cta_text: "My Themes",
            cta_icon: "palette",
          },
        },
      };

      if (api.getCurrentUser()) {
        api.decorateWidget("header-buttons:before", () => {
          return h("button.btn.btn-primary.header-theme-btn", [
            h(
              "a",
              { href: strings.tc_intro.bottom_section.section_2.cta_link },
              [
                iconNode(strings.tc_intro.bottom_section.section_2.cta_icon),
                h("span", strings.tc_intro.bottom_section.section_2.cta_text),
              ]
            ),
          ]);
        });
      }
    });
  },
};
