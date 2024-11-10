<style scoped>
	@import "../../../src/inputs/button/button-base.css";
  @import "../../../src/inputs/button/button-variants.css";
	@import "../../../src/surfaces/card.css";
  @import "../../../src/feedback/dialog.css";

	.anatomy :where(button, dialog){
    outline: var(--_anatomy-border-red);
    outline-offset: 3px;
	}
</style>

<script setup>
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

<div class="example-wrapper">
   <div class="example">

<button @click="openModal" class="tonal">Open dialog</button>

<dialog ref="dialog" role="dialog" aria-labelledby="dialog-heading" aria-modal="true" class="card elevated">
		<div class="header">
			<h2 id="dialog-heading" class="h4">Are you sure?</h2>
		</div>
		<div class="content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales,
      nulla sit amet porttitor rhoncus.
		</div>
		<div class="actions">
			<button @click="closeModal">Cancel</button>
			<button @click="closeModal">Save</button>
		</div>
</dialog>
  </div>

::: code-group

```html [dialog.html]
<dialog>
  <div class="card">
    <div class="header">
      <h2 class="h4">Are you sure?</h2>
    </div>
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

</div>

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

| Key                               | Function                                                                                                                                                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Tab</kbd>                    | <ul><li>Moves focus to next focusable element inside the dialog.</li><li>When focus is on the last focusable element in the dialog, moves focus to the first focusable element in the dialog.</li></ul>     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | <ul><li>Moves focus to previous focusable element inside the dialog.</li><li>When focus is on the first focusable element in the dialog, moves focus to the last focusable element in the dialog.</li></ul> |
| <kbd>Esc</kbd>                    | Closes the dialog.                                                                                                                                                                                          |

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
    <div class="header">
      <h2 id="dialog-heading" class="h4">Dialog heading</h2>
    </div>
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

<div class="example-wrapper">
   <div class="example stack anatomy" style="min-height: 4rem;">

<button class="tonal">Open dialog</button>

<dialog open style="margin-block-start: 0;">Dialog</dialog>
  </div>

```html
<button id="open-dialog-button">Open dialog</button>

<dialog open>
  <!--  -->
</dialog>
```

</div>

## API

A `<dialog>` element on its own doesn't do much. It's recommended to combine it with the [card](/components/surfaces/card) component.
