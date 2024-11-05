<style scoped>
  @import "../../../src/surfaces/accordion.css";
	@import "../../../src/surfaces/card.css";
</style>

# Accordion

<div class="example-wrapper">
   <div class="example stack">

 <details class="accordion">
	<summary id="summary1" aria-controls="content1">
		Accordion title
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="accordion elevated">
	<summary id="summary2" aria-controls="content2">
		Accordion title
	</summary>
	<div id="content2" class="content" role="region" aria-labelledby="summary2">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="accordion outlined">
	<summary id="summary3" aria-controls="content3">
		Accordion title
	</summary>
	<div id="content3" class="content" role="region" aria-labelledby="summary3">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

  </div>

```html
<details class="accordion">
  <summary id="summary1" aria-controls="content1">Accordion title</summary>
  <div id="content1" class="content" role="region" aria-labelledby="summary1">
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

## Accordion group

<div class="example-wrapper">
   <div class="example stack">

<div class="accordion-group">
 <details class="accordion">
	<summary id="summary1" aria-controls="content1">
		Accordion title
	</summary>
	<div id="content1" class="content" role="region" aria-labelledby="summary1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="accordion">
	<summary id="summary2" aria-controls="content2">
		Accordion title
	</summary>
	<div id="content2" class="content" role="region" aria-labelledby="summary2">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

<details class="accordion">
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
<details class="accordion">
  <summary id="summary1" aria-controls="content1">Accordion title</summary>
  <div id="content1" class="content" role="region" aria-labelledby="summary1">
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

 <details class="accordion" open>
	<summary id="anatomy-summary-1" aria-controls="anatomy-content-1">
		Accordion title
	</summary>
	<div id="anatomy-content-1" class="content" role="region" aria-labelledby="anatomy-summary-1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nulla sit amet porttitor rhoncus, lacus ex vestibulum libero, ac mollis neque ante id justo. Nam tempor euismod nisi ac ornare. Pellentesque id sapien lacinia, venenatis est aliquam, dignissim elit. Suspendisse potenti. Cras ut ante in libero tempus sodales sed quis dolor.</p>
	</div>
</details>

  </div>

```html
<details class="accordion">
  <summary id="anatomy-summary-1" aria-controls="anatomy-content-1">
    <!--  -->
  </summary>
  <div
    id="anatomy-content-1"
    class="content"
    role="region"
    aria-labelledby="anatomy-summary-1"
  >
    <!--  -->
  </div>
</details>
```

</div>
