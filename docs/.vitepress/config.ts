import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Props UI",
  description: "A scalable CSS happy path",
  markdown: {
    theme: "dark-plus",
  },
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
      { text: "Guide", link: "/guide/why-open-props-ui" },
      { text: "Components", link: "/components" },
      { text: "Open Props", link: "https://open-props.style/" },
    ],

    sidebar: {
      "/guide": [
        {
          text: "Guide",
          items: [
            {
              text: "Why Open Props UI?",
              link: "/guide/why-open-props-ui",
            },
            {
              text: "Getting started",
              link: "/guide/getting-started",
            },
          ],
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
                { text: "Button", link: "/components/inputs/button" },
                { text: "Checkbox", link: "/components/inputs/checkbox" },
                { text: "Input", link: "/components/inputs/input" },
                { text: "Radio", link: "/components/inputs/radio" },
                { text: "Select", link: "/components/inputs/select" },
              ],
            },
            {
              text: "Data display",
              collapsed: false,
              items: [
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
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/felix-bohlin/ui" },
    ],
  },
});
