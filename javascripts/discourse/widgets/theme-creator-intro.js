import { createWidget } from "discourse/widgets/widget";

const h = require("virtual-dom").h;
const headerHeight = require("discourse/components/site-header").headerHeight;
const { iconNode } = require("discourse-common/lib/icon-library");

let strings = [];

strings["tc_intro"] = {
  top_section: {
    //
  },
  mid_section: {
    section_1: {
      heading: "What is Theme Creator?",
      blurb:
        "Theme Creator is a tool that allows you to create, edit, preview and share themes and theme components without installing Discourse!",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/5/5c84a093e30c4d03181b5e7dbd959c23d3b88925.svg",
      cta_text: "Learn more about Theme Creator",
      cta_link:
        "https://meta.discourse.org/t/theme-creator-create-and-show-themes-without-installing-discourse/84942",
      color: "#00AEEF",
    },
    section_2: {
      heading: "How do I create themes?",
      blurb:
        "Creating new themes for Discourse is simple. Once you're familiar with the structure of theme files and folders, you'll practically be able to do it with your eyes closed!",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/9/9571c9a72058deedc08f24f648b6703eac91c82e.svg",
      cta_text: "Learn how to create Discourse themes",
      cta_link:
        "https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848",
      color: "#00A94F",
    },
    section_3: {
      heading: "Discourse Theme CLI",
      blurb:
        "To make things even simpler, we've created the Theme CLI - a command line tool that generates all the necessery files and folders for a new theme with a few keystrokes. Once you try it, you'll never go back!",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/8/8b53f12ea9e77115c40d7b04a154d770d3bbf410.svg",
      cta_text: "Learn how to install and use the Theme CLI",
      cta_link:
        "https://meta.discourse.org/t/discourse-theme-cli-console-app-to-help-you-build-themes/82950",
      color: "#FFF9AE",
    },
    section_4: {
      heading: "Discourse style guide",
      blurb:
        "The style guide is a great starting point to see how the changes in your theme affect the Discourse interface. It enables you to quickly check numerous UI elements all on one page.",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/4/47810b5de70b0d4c5e44a05168945e6e9a60b360.svg",
      cta_text: "Learn more about the style guide",
      cta_link:
        "https://meta.discourse.org/t/the-official-discourse-styleguide-plugin/67405",
      color: "#F15D22",
    },
    section_5: {
      heading: "Advanced Discourse Themes",
      blurb:
        "Want to create themes that go beyond simple CSS and color modifications? You can! With a bit of patience and a bit of reading, you'll be able to create themes and components that add entirely new features or modify existing features to make them work exactly the way you want. ",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/9/9de049d2e715d1ab134006831e378b1f56cd96bd.svg",
      cta_text: "Learn how to create advanced themes",
      cta_link:
        "https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648",
      color: "#D0232B",
    },
    section_6: {
      heading: "Got a question?",
      blurb:
        "If you're ever stuck on anything while developing a theme, we're here to help. Let us know what issues you're facing and we'll try our best to help. The more details you include in your question the more likely we'll be able to help.",
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/c/c1fe5c588d87ee923165089f84eaa536f7c40686.svg",
      cta_text: "Ask a Question",
      cta_link: "https://meta.discourse.org/new-topic?&category=dev",
      color: "#000000",
    },
  },
  bottom_section: {
    section_1: {
      image:
        "https://discourse-cloud-file-uploads.s3.dualstack.us-west-2.amazonaws.com/themecreator/original/2X/5/5ee2aba44da3e00b9b08f9bee1ffd9be006c6878.svg",
    },
    section_2: {
      heading: "What are you waiting for?",
      blurb:
        "You have access to all the tools and information you need to create awesome themes. There's a world of possibilities and we can't wait to see what you come up with! Create an account on meta.discourse.org and log in here to get started.",
      cta_link: "/my/themes",
      cta_text: "My Themes",
      cta_icon: "palette",
      cta_link_anon: "/login",
      cta_text_anon: "Log in",
      cta_icon_anon: "user",
    },
  },
};

createWidget("theme-creator-intro", {
  tagName: "div.theme-creator-intro",

  _getHeaderHeight() {
    return headerHeight();
  },

  _getBodyWidth() {
    return $("body").width();
  },

  _isLoggedIn() {
    return this.currentUser;
  },

  html() {
    return h("div.tc-intro", [
      h(
        "div.tc-top-section",
        {
          style: `--width: ${this._getBodyWidth()}px`,
        },
        [
          h("div.tc-waves", [
            h("div.svg.svg_1"),
            h("div.svg.svg_2"),
            h("div.svg.svg_3"),
            h("div.svg.svg_4"),
          ]),
        ]
      ),

      h("div.tc-mid-section", [
        h("div.tc-mid-content.tc-content", [
          h("div.tc-mid-section.tc-mid-section-1", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_1.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_1.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    `${strings.tc_intro.mid_section.section_1.blurb}`
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta",
                      {
                        href: strings.tc_intro.mid_section.section_1.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_1.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_1.image,
                })
              ),
            ]),
          ]),
          h("div.tc-mid-section.tc-mid-section-2", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_2.image,
                })
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_2.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_2.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    strings.tc_intro.mid_section.section_2.blurb
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta",
                      {
                        href: strings.tc_intro.mid_section.section_2.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_2.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
          h("div.tc-mid-section.tc-mid-section-3", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_3.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_3.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    strings.tc_intro.mid_section.section_3.blurb
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta.dark-font",
                      {
                        href: strings.tc_intro.mid_section.section_3.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_3.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_3.image,
                })
              ),
            ]),
          ]),
          h("div.tc-mid-section.tc-mid-section-4", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_4.image,
                })
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_4.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_4.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    strings.tc_intro.mid_section.section_4.blurb
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta",
                      {
                        href: strings.tc_intro.mid_section.section_4.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_4.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
          h("div.tc-mid-section.tc-mid-section-5", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_5.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_5.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    strings.tc_intro.mid_section.section_5.blurb
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta",
                      {
                        href: strings.tc_intro.mid_section.section_5.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_5.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_5.image,
                })
              ),
            ]),
          ]),
          h("div.tc-mid-section.tc-mid-section-6", [
            h("div.tc-mid-box-left", [
              h(
                "div.tc-image",
                h("img", {
                  src: strings.tc_intro.mid_section.section_6.image,
                })
              ),
            ]),
            h("div.tc-mid-box-right", [
              h(
                "div.tc-text",
                {
                  style: `--color: ${strings.tc_intro.mid_section.section_6.color}`,
                },
                [
                  h(
                    "h1.tc-section-heading",
                    strings.tc_intro.mid_section.section_6.heading
                  ),
                  h(
                    "div.tc-section-blurb",
                    strings.tc_intro.mid_section.section_6.blurb
                  ),
                  h("button.btn.btn-primary", [
                    h(
                      "a.tc-cta",
                      {
                        href: strings.tc_intro.mid_section.section_6.cta_link,
                        target: "_blank",
                      },
                      strings.tc_intro.mid_section.section_6.cta_text
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      h("div.tc-bottom-section", [
        h("div.tc-bottom-content.tc-content", [
          h("div.tc-bottom-section-1", [
            h("div.tc-text", [
              h("h1", strings.tc_intro.bottom_section.section_2.heading),
              h(
                "div.tc-blurb",
                strings.tc_intro.bottom_section.section_2.blurb
              ),
              h("button.btn.btn-primary", [
                h(
                  "a.tc-cta",
                  {
                    href: this._isLoggedIn()
                      ? strings.tc_intro.bottom_section.section_2.cta_link
                      : strings.tc_intro.bottom_section.section_2.cta_link_anon,
                  },
                  [
                    iconNode(
                      this._isLoggedIn()
                        ? strings.tc_intro.bottom_section.section_2.cta_icon
                        : strings.tc_intro.bottom_section.section_2
                            .cta_icon_anon
                    ),
                    this._isLoggedIn()
                      ? strings.tc_intro.bottom_section.section_2.cta_text
                      : strings.tc_intro.bottom_section.section_2.cta_text_anon,
                  ]
                ),
              ]),
            ]),
          ]),
          h("div.tc-bottom-section-2", [
            h(
              "div.tc-image",
              h("img", {
                src: strings.tc_intro.bottom_section.section_1.image,
              })
            ),
          ]),
        ]),
      ]),
    ]);
  },
});
