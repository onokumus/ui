---
overline: Guide
title: Getting started
---

<script setup>
import Alert from "../.vitepress/theme/app/components/Alert.vue";
</script>

This guide will set you up with:

- Open Props
- a normalize
- some util classes
- base theme setup

::: info

Open Props UI is just CSS. Therefore you're able to go and **copy and paste** any [component](/components/actions/button) right now without any installs. You don't even need Open Props! It won't necessarily look and feel as intended, but if that suits your project then skip this page.
:::

## 1. Install Open Props

Open Props v2 hasn't dropped yet, which is why this project relies on the OPv2 beta. The difference right now between the OPv1 and the OPv2 beta aren't huge (the way OPUI consumes it), so you should be fine with either version.

```sh
# pnpm
pnpm i open-props@2.0.0-beta.5 --save-alias opbeta

# npm
npm i open-props@2.0.0-beta.5 --save-alias opbeta

# yarn
yarn add open-props@2.0.0-beta.5 --alias opbeta
```

## 2. Base setup

### Folder structure

This is folder structure that comes out of the box. Feel free to change it to your needs.

```
├─ main.css
├─ normalize.css
├─ theme.css
├─ utils.css
├─ actions
│  └─ ...
├─ data-display
│  └─ ...
├─ feedback
│  └─ ...
├─ inputs
│  └─ ...
└─ text
   └─ ...
```

### Copy & paste

<div class="not-rich-text">
<Alert severity="warning">
<p>While many components will work as intended in modern browsers - some are using features that haven't landed outside Chromium with <strong>experimental feature flags</strong> enabled.</p>

<a href="/guide/what-is-open-props-ui" class="link">About Open Props UI.</a>
</Alert>

</div>

::: code-group
<<< @/../src/main.css [main.css]
<<< @/../src/normalize.css [normalize.css]
<<< @/../src/utils.css [utils.css]
<<< @/../src/theme.css [theme.css]
:::
