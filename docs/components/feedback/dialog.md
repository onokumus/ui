<script setup>
  import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
  import Example from "../../.vitepress/theme/app/components/Example.vue"

	import {ref} from "vue"
	const dialog = ref()

	function openModal() {
		dialog.value?.showModal()
	}

	function closeModal() {
		dialog.value?.close()
	}
</script>

# Dialog

A `<dialog>` element on its own doesn't do much, but combined with the [card](/components/surfaces/card) component you have a foundation to quickly compose pretty much whatever you need.

::: tip Javascript is required
In order to toggle a `<dialog>` you will need to use Javascript.
:::

## Basics

<Example>
<template #example>
<button @click="openModal" class="tonal">Open dialog</button>

<dialog ref="dialog" role="dialog" aria-labelledby="dialog-heading" aria-modal="true" class="card elevated">
		<hgroup>
			<h2 id="dialog-heading" class="h4">Are you sure?</h2>
		</hgroup>
		<div class="content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales,
      nulla sit amet porttitor rhoncus.
		</div>
		<div class="actions">
			<button @click="closeModal">Cancel</button>
			<button @click="closeModal">Save</button>
		</div>
</dialog>
</template>

<template #code>

::: code-group

```html [dialog.html]
<dialog>
  <div class="card">
    <hgroup>
      <h2 class="h4">Are you sure?</h2>
    </hgroup>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales,
      nulla sit amet porttitor rhoncus.
    </div>
    <div class="actions">
      <button>Cancel</button>
      <button>Save</button>
    </div>
  </div>
</dialog>

<button id="open-dialog-button">Open dialog</button>
```

```js [dialog.js]
const dialog = document.querySelector("dialog");
const showButton = document.getElementById("open-dialog-button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

:::

</template>
</Example>

## Accessibility

- The `tabindex` attribute must **not** be used on the `<dialog>` element.

### Role & attributes

| Role/attribute           | Usage                                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| role="dialog"            | Identifies the element that serves as the dialog container.                                                                                |
| role="alertdialog"       | If the dialog is a confirmation window communicating an important message that requires a confirmation or other user response.             |
| aria-labelledby="IDREF"  | Gives the dialog an accessible name by referring to the element that provides the dialog title.                                            |
| aria-describedby="IDREF" | Gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog. |
| aria-modal="true"        | Tells assistive technologies that the windows underneath the current dialog are not available for interaction (inert).                     |

### Keyboard support

| Key                    | Function                                                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>         | <ul><li>Moves focus to next focusable element inside the dialog.</li><li>When focus is on the last focusable element in the dialog, moves focus to the first focusable element in the dialog.</li></ul>     |
| <kbd>Shift + Tab</kbd> | <ul><li>Moves focus to previous focusable element inside the dialog.</li><li>When focus is on the first focusable element in the dialog, moves focus to the last focusable element in the dialog.</li></ul> |
| <kbd>Esc</kbd>         | Closes the dialog.                                                                                                                                                                                          |

Source: [w3.org](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/#rps_label), [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility)

### Basic example

```html {2,3,4,5,9,11}
<dialog
  role="dialog"
  aria-labelledby="dialog-heading"
  aria-describedby="dialog-content"
  aria-modal="true"
>
  <div class="card">
    <hgroup>
      <h2 id="dialog-heading" class="h4">Dialog heading</h2>
    </hgroup>
    <div id="dialog-content" class="content"><!--  --></div>
    <div class="actions">
      <!--  -->
    </div>
  </div>
</dialog>
```

## Anatomy

1. Button to show dialog
2. `<dialog>` container

<Example exampleClass="anatomy">
<template #example>
<button class="tonal">Open dialog</button>

<div style="background-color: light-dark(white,rgb(18,18,18)); display: flex; margin: 1rem 0 0 0; width:fit-content; padding: .5rem;">Dialog</div>
</template>

<template #code>

```html
<button id="open-dialog-button">Open dialog</button>

<dialog open>
  <!--  -->
</dialog>
```

</template>
</Example>

## API

A `<dialog>` element on its own doesn't do much. It's recommended to use it in combination with the [card](/components/surfaces/card) component.

## Browser compatibility

<Baseline :ids="['container-style-queries','light-dark']" />

## Installation

::: tip
It's recommended to use the dialog in combination with the [card](/components/surfaces/card) component.
:::

::: code-group
<<< @/../src/feedback/dialog.css [dialog.css]
<<< @/../src/surfaces/card.css [card.css]
:::
