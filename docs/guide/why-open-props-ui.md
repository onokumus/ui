# Why Open Props UI?

Think of it as Open Props, shadcn and Material UI mixed together. If that doesn't mean anything you;

- CSS component library leveraging [Open Props](https://open-props.style/).
- "No installs" - just copy the code you need and edit it to suit your project.

Setting up a good CSS structure for your project might not be the thing you are looking forwards to the most. Arguably that's why we have Tailwind, UnoCSS, Material UI etc. These libraries do a good job of nudging you towards a **happy path**, and that is the goal here as well.

Open Props UI gets you going faster. From there you can take it anywhere you want!

## Enough already, just tell me what it is!

Open Props UI is a component library, and each component is dependent on the CSS variables defined in your `theme`-file.

1. In `main.css`, Open Props props are imported and placed in CSS layers.
2. In `theme.css`, we declare all the CSS variables we need for our project.
3. In `/components`, the components only use the props found inside of `theme.css`.

> [!IMPORTANT]
> All Open Props props are **not** imported - just the ones needed to get you started. <br> It's up to you to define which you want to keep and which ones you need to add.

[Read more about customization and theming](/guide/theme)
