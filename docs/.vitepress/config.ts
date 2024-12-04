import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Props UI",
  description:
    "CSS framework leveraging the most modern features. Components you can copy and paste into your project.",
  markdown: {
    theme: "dark-plus",
  },
  head: [
    ["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/ui-logo.png" }],
    ["meta", { name: "theme-color", content: "var(--color-8)" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Open Props UI | A modern CSS framework",
      },
    ],
    ["meta", { property: "og:site_name", content: "Open Props UI" }],
    ["meta", { property: "og:image", content: "/opui-logo.png" }],
    [
      "meta",
      { property: "og:url", content: "https://open-props-ui.netlify.app" },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: "https://github.com/felix-bohlin/ui/tree/main/docs/:path",
    },
    outline: "deep",
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    nav: [
      { text: "Guide", link: "/guide/what-is-open-props-ui" },
      { text: "Components", link: "/components" },
      // {
      //   text: "Version",
      //   items: [
      //     {
      //       text: "HTML",
      //       link: "#",
      //     },
      //     {
      //       text: "React",
      //       link: "#",
      //     },
      //     {
      //       text: "Solid",
      //       link: "#",
      //     },
      //     {
      //       text: "Svelte",
      //       link: "#",
      //     },
      //     {
      //       text: "Vue",
      //       link: "#",
      //     },
      //   ],
      // },
      { text: "API", link: "/api" },
      { text: "Blog", link: "/blog" },
      { text: "Open Props", link: "https://open-props.style/" },
    ],

    sidebar: {
      "/guide": [
        {
          text: "Guide",
          items: [
            {
              text: "What is Open Props UI?",
              link: "/guide/what-is-open-props-ui",
            },
            {
              text: "Getting started",
              link: "/guide/getting-started",
            },
            {
              text: "Browser compatibility",
              link: "/guide/browser-compatibility",
            },
          ],
        },
        {
          text: "Acknowledgments",
          link: "/guide/acknowledgments",
        },
      ],
      "/components": [
        {
          text: "Components",
          items: [
            {
              text: "Inputs",
              collapsed: false,
              items: [
                {
                  text: "Autocomplete",
                  link: "/components/inputs/autocomplete",
                },
                { text: "Button", link: "/components/inputs/button" },
                {
                  text: "Button group",
                  link: "/components/inputs/button-group",
                },
                { text: "Checkbox", link: "/components/inputs/checkbox" },
                { text: "Color", link: "/components/inputs/color" },
                { text: "Date", link: "/components/inputs/date" },
                { text: "File", link: "/components/inputs/file" },
                { text: "Icon Button", link: "/components/inputs/icon-button" },
                { text: "Radio", link: "/components/inputs/radio" },
                { text: "Range", link: "/components/inputs/range" },
                { text: "Search", link: "/components/inputs/search" },
                { text: "Select", link: "/components/inputs/select" },
                { text: "Switch", link: "/components/inputs/switch" },
                { text: "Textarea", link: "/components/inputs/textarea" },
                { text: "Text input", link: "/components/inputs/index" },
                {
                  text: "Toggle button group",
                  link: "/components/inputs/toggle-button-group",
                },
              ],
            },
            {
              text: "Data display",
              collapsed: false,
              items: [
                { text: "Avatar", link: "/components/data-display/avatar" },
                { text: "Badge", link: "/components/data-display/badge" },
                { text: "Chip", link: "/components/data-display/chip" },
                { text: "Divider", link: "/components/data-display/divider" },
                { text: "List", link: "/components/data-display/list" },
                { text: "Table", link: "/components/data-display/table" },
                { text: "Tooltip", link: "/components/data-display/tooltip" },
                {
                  text: "Typography",
                  link: "/components/data-display/typography",
                },
              ],
            },
            {
              text: "Feedback",
              collapsed: false,
              items: [
                { text: "Alert", link: "/components/feedback/alert" },
                { text: "Dialog", link: "/components/feedback/dialog" },
                { text: "Progress", link: "/components/feedback/progress" },
                { text: "Snackbar", link: "/components/feedback/snackbar" },
                { text: "Spinner", link: "/components/feedback/spinner" },
              ],
            },
            {
              text: "Surfaces",
              collapsed: false,
              items: [
                { text: "Accordion", link: "/components/surfaces/accordion" },
                { text: "Card", link: "/components/surfaces/card" },
              ],
            },
            {
              text: "Utils",
              link: "/components/utils",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/felix-bohlin/ui" },
    ],
  },
});
