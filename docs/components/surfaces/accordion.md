<style scoped>
@import "../../../src/surfaces/accordion.css";
@import "../../../src/surfaces/card.css";

.anatomy {
	outline: var(--_anatomy-border-gray);
	outline-offset: 3px;
	:is(summary, .content) {
		outline: var(--_anatomy-border-red);
		outline-offset: -2px;
	}
}

.custom-arrow {
	summary {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='M5.366 11.116a1.25 1.25 0 0 1 1.768 0L16 19.982l8.866-8.866a1.25 1.25 0 0 1 1.768 1.768l-9.75 9.75a1.25 1.25 0 0 1-1.768 0l-9.75-9.75a1.25 1.25 0 0 1 0-1.768'/%3E%3C/svg%3E");
    background-position: right var(--size-3) top 50%;
    background-repeat: no-repeat;
    background-size: var(--size-5);
    list-style: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
	}

	&[open] > summary {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='M5.293 20.707a1 1 0 0 0 1.414 0L16 11.414l9.293 9.293a1 1 0 0 0 1.414-1.414l-10-10a1 1 0 0 0-1.414 0l-10 10a1 1 0 0 0 0 1.414'/%3E%3C/svg%3E");
  }
}
</style>

# Accordion

Leverages the HTML `details` and `summary` elements.

## Basics

<div class="example-wrapper">
   <div class="example stack">

 <details>
	<summary id="summary-id" aria-controls="content-id">
		Accordion
	</summary>
	<div id="content-id" class="content" role="region" aria-labelledby="summary-id">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>
  </div>

```html
<details>
  <summary id="summary-id" aria-controls="content-id">Accordion title</summary>
  <div
    id="content-id"
    class="content"
    role="region"
    aria-labelledby="summary-id"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales,
      nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis
      neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id
      sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse
      potenti. Cras ut ante in libero tempus sodales sed quis dolor.
    </p>
  </div>
</details>
```

</div>

## Variants

<div class="example-wrapper">
   <div class="example stack">

 <details>
	<summary id="summary1" aria-controls="content1">
		Text
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="elevated">
	<summary id="summary2" aria-controls="content2">
		Elevated
	</summary>
	<div id="content2" class="content" role="region" aria-labelledby="summary2">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="outlined">
	<summary id="summary3" aria-controls="content3">
		Outlined
	</summary>
	<div id="content3" class="content" role="region" aria-labelledby="summary3">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="tonal">
	<summary id="summary3" aria-controls="content3">
		Tonal
	</summary>
	<div id="content3" class="content" role="region" aria-labelledby="summary3">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

  </div>

```html
<!-- Text (default) -->
<details>
  <!--  -->
</details>

<!-- or -->

<details class="text">
  <!--  -->
</details>

<!-- Elevated -->
<details class="elevated">
  <!--  -->
</details>

<!-- Outlined -->
<details class="outlined">
  <!--  -->
</details>

<!-- Tonal -->
<details class="tonal">
  <!--  -->
</details>
```

</div>

## Accordion group

Apply the `.accordion-group` class to a wrapper around the `details` elements.

To select a [variant](#variants), apply the variant class on the `.accordion-group` element.

<div class="example-wrapper">
   <div class="example stack">

<div class="accordion-group tonal">
 <details>
	<summary id="summary1" aria-controls="content1">
		Accordion title
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details>
	<summary id="summary2" aria-controls="content2">
		Accordion title
	</summary>
	<div id="content2" class="content" role="region" aria-labelledby="summary2">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details>
	<summary id="summary3" aria-controls="content3">
		Accordion title
	</summary>
	<div id="content3" class="content" role="region" aria-labelledby="summary3">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>
</div>
</div>

```html
<div class="accordion-group tonal">
  <details>
    <!--  -->
  </details>
  <details>
    <!--  -->
  </details>
  <details>
    <!--  -->
  </details>
</div>
```

</div>

::: info
If you want only one accordion to be open at a time you will need to use Javascript.
:::

## Custom arrow

If the native `details` arrow is not your thing, you can easily modify the `accordion.css` file to add your own preferred icon.

<div class="example-wrapper">
   <div class="example stack">

 <details class="outlined custom-arrow">
	<summary id="summary1" aria-controls="content1">
		Accordion title
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

</div>

```css
details {
  summary {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='M5.366 11.116a1.25 1.25 0 0 1 1.768 0L16 19.982l8.866-8.866a1.25 1.25 0 0 1 1.768 1.768l-9.75 9.75a1.25 1.25 0 0 1-1.768 0l-9.75-9.75a1.25 1.25 0 0 1 0-1.768'/%3E%3C/svg%3E");
    background-position: right var(--size-3) top 50%;
    background-repeat: no-repeat;
    background-size: var(--size-5);
    list-style: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    /* ... */
  }

  &[open] > summary {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='M5.293 20.707a1 1 0 0 0 1.414 0L16 11.414l9.293 9.293a1 1 0 0 0 1.414-1.414l-10-10a1 1 0 0 0-1.414 0l-10 10a1 1 0 0 0 0 1.414'/%3E%3C/svg%3E");
  }

  /* ... */
}
```

</div>

## Accessibility

The [WAI-ARIA guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) for accordions recommend:

- `summary` element
  - adding id and aria-controls
  - adding aria-expanded (if using JS)
- content wrapper
  - adding id, role and aria-labelledby

## Anatomy

<div class="example-wrapper">
   <div class="example stack">

 <details open class="anatomy">
	<summary id="anatomy-summary-1" aria-controls="anatomy-content-1">
		Accordion title
	</summary>
	<div id="anatomy-content-1" class="content" role="region" aria-labelledby="anatomy-summary-1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

  </div>

```html
<details>
  <summary id="summary-1" aria-controls="content-1">
    <!--  -->
  </summary>
  <div id="content-1" class="content" role="region" aria-labelledby="summary-1">
    <!--  -->
  </div>
</details>
```

</div>

## API

These are the classes and attributes a card can be styled with. As usual, feel free to add your own!

| Type                  | Modifiers                                     | Default | Description                          |
| --------------------- | --------------------------------------------- | ------- | ------------------------------------ |
| [Anatomy](#anatomy)   | `& > summary`, `& > .content`                 | -       | Optional wrappers for child content. |
| [Variants](#variants) | `.text`, `.elevated`, `.tonal`,s `.outlined`, | `.text` | The variant to use.                  |
