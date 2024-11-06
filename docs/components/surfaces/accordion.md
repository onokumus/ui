<style scoped>
@import "../../../src/surfaces/accordion.css";
@import "../../../src/surfaces/card.css";

.anatomy {
	outline: var(--_anatomy-border-gray);
	outline-offset: 8px;

	summary{
		outline: var(--_anatomy-border-red);
		outline-offset: -4px;
	}

	.content {
		outline: var(--_anatomy-border-red);
		outline-offset: 0;
	}
}

.custom-arrow {
	summary {
		align-items: center;
		display: flex;
		justify-content: space-between;
    list-style: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }
	}

	&[open] > summary svg {
		rotate: 180deg;
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

Apply the `.card` class to a parent element.

You are still able to set [variant](#variants) styles, but instead of doing it on the individual elements - apply the variant class on the `.card` element instead.

<div class="example-wrapper">
   <div class="example stack">

<div class="card outlined">
	<div class="content">
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
</div>

```html
<div class="card outlined">
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

If the native `details` arrow doesn't suit your needs you can easily modify the `accordion.css` file to add your own preferred icon.

<div class="example-wrapper">
   <div class="example stack">

 <details class="outlined custom-arrow">
	<summary id="summary1" aria-controls="content1">
		Custom arrow
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414"/></svg>
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

</div>

::: code-group

```html {4-15} [accordion.html]
<details class="outlined">
  <summary id="summary1" aria-controls="content1">
    Custom arrow
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414"
      />
    </svg>
  </summary>
  <div id="content1" class="content" role="region" aria-labelledby="summary1">
    <!--  -->
  </div>
</details>
```

```css [accordion.css]
details {
  /* ... */

  summary {
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    /* ... */
  }

  &[open] > summary svg {
    rotate: 180deg;
  }

  /* ... */
}
```

:::

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

| Type                  | Modifiers                                    | Default | Description                          |
| --------------------- | -------------------------------------------- | ------- | ------------------------------------ |
| [Anatomy](#anatomy)   | `& > summary`, `& > .content`                | -       | Optional wrappers for child content. |
| [Variants](#variants) | `.text`, `.elevated`, `.tonal`, `.outlined`, | `.text` | The variant to use.                  |
