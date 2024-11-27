<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

<style>
ul {
  margin: 0 auto;
  max-inline-size: 40ch;
}
</style>

# List

## Configurations

::: tip With great power...
The List component is _extremely_ flexible and versatile. Be careful if you start creating new configurations on your own. Maybe an existing one can solve your problem, but in another way?
:::

### All

<Example>

<template #example>

<ul class="list">

<li>
  <div class="text">
    <p>Headline</p>
  </div>
</li>

<li>
  <div class="text">
    <p>Headline</p>
    <p>
      Supporting text that truly is quite long enough to fill up multiple lines.
    </p>
  </div>
</li>

<li>
  <div class="text">
    <p>Trailing supporting text</p>
  </div>
  <div class="end">
    100+
  </div>
</li>

<li class="border-top">
  <div class="start">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"
      />
    </svg>
  </div>
  <div class="text">
    <p>Headline with start icon</p>
  </div>
</li>

<li>
  <div class="start">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"
      />
    </svg>
  </div>
  <div class="text">
    <p>Headline with start icon</p>
    <p>
      Supporting text that truly is quite long enough to fill up multiple lines.
    </p>
  </div>
</li>

<li class="inset">
  <div class="text">
    <p>Inset class</p>
    <p>Makes the text line up nicely</p>
  </div>
</li>

<li class="border-top">
  <button>
    <div class="text">
      <p>Button list item</p>
    </div>
  </button>
</li>

<li>
  <a href="#">
    <div class="text">
      <p>Link list item</p>
    </div>
  </a>
</li>

<li class="border-top">
  <button>
    <div class="start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 28 28"
      >
        <path
          fill="currentColor"
          d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V15h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 15h6V6.25a1.75 1.75 0 0 0-1.75-1.75"
        />
      </svg>
    </div>
    <div class="text">
      <p>Button with start icon</p>
    </div>
  </button>
</li>

<li>
  <a href="#">
    <div class="start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m13.94 5l5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"
        />
      </svg>
    </div>
    <div class="text">
      <p>Link with start icon</p>
    </div>
  </a>
</li>

<li class="border-top">
  <button>
    <div class="text">
      <p>End icon</p>
    </div>
    <div class="end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M11.116 26.634a1.25 1.25 0 0 1 0-1.768L19.982 16l-8.866-8.866a1.25 1.25 0 0 1 1.768-1.768l9.75 9.75a1.25 1.25 0 0 1 0 1.768l-9.75 9.75a1.25 1.25 0 0 1-1.768 0"
        />
      </svg>
    </div>
  </button>
</li>

<li>
    <div class="text">
      <p>End icon button</p>
    </div>
    <div class="end">
    <button class="button">
      <span class="sr-only">More</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m0 9a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M13.5 25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"/></svg>
    </button>
    </div>
</li>

<li class="border-top">
  <label for="checkbox-1">
    <div class="text">
      <p>Checkbox</p>
    </div>
    <div class="end">
      <input id="checkbox-1" type="checkbox" class="checkbox" />
    </div>
    </label>
</li>

<li class="border-top">
  <label for="radio-1">
    <div class="text">
      <p>Radio 1</p>
    </div>
    <div class="end">
      <input id="radio-1" name="radio-group-1" type="radio" class="radio" />
    </div>
    </label>
</li>

<li>
  <label for="radio-2">
    <div class="text">
      <p>Radio 2</p>
    </div>
    <div class="end">
      <input id="radio-2" name="radio-group-1" type="radio" class="radio" />
    </div>
    </label>
</li>

</ul>
</template>

</Example>

### Text-only

<Example hideCode>

<template #example>

<ul class="list">
  <li>
    <div class="text">
      <p>Headline</p>
    </div>
  </li>
  <li>
    <div class="text">
      <p>Headline</p>
      <p>Supporting text</p>
    </div>
    <div class="end">42kb</div>
  </li>

  <li>
    <div class="text">
      <p>Headline</p>
      <p>
        Supporting text that truly is quite long enough to fill up multiple lines.
      </p>
    </div>
    <div class="end">
      999+
    </div>
  </li>
</ul>
</template>

<template #code>

```html
<ul class="list">
  <li>
    <div class="text">
      <p>Headline</p>
    </div>
  </li>

  <li>
    <div class="text">
      <p>Headline</p>
      <p>Supporting text</p>
    </div>
    <div class="end">42kb</div>
  </li>

  <li>
    <div class="text">
      <p>Headline</p>
      <p>
        Supporting text that truly is quite long enough to fill up multiple
        lines.
      </p>
    </div>
    <div class="end">999+</div>
  </li>
</ul>
```

</template>
</Example>

### Icon

<Example hideCode>
<template #example>
<ul class="list">
<li>
	<div class="start">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
  <p>Headline</p>
</div>
</li>

<li>
	<div class="start">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
  <p>Headline</p>
  <p>Supporting text</p>
</div>

<div class="end">
	100+
</div>
</li>
</ul>

</template>

<template #code>

```html
<ul class="list">
  <li>
    <div class="start">
      <svg></svg>
    </div>

    <div class="text">
      <p>Headline</p>
    </div>
  </li>

  <li>
    <div class="start">
      <svg></svg>
    </div>

    <div class="text">
      <p>Headline</p>
      <p>Supporting text</p>
    </div>

    <div class="end">100+</div>
  </li>
</ul>
```

</template>
</Example>

### Avatar

<Example>
<template #example>

</template>

<template #code>

</template>
</Example>

### Image

<Example>
<template #example>
<ul class="list">
<li>
	<div class="start">
		<img src="https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
	</div>

<div class="text">
  <p>Headline</p>
  <p>Supporting text</p>
</div>

<div class="end">
	100+
</div>
</li>
<li>
	<div class="start">
		<img src="https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
	</div>

<div class="text">
  <p>Headline</p>
  <p>Supporting text</p>
</div>

<div class="end">
	100+
</div>
</li>
</ul>

</template>

</Example>

### Video

<Example>

<template #example>

<ul class="list">
<li>
	<div class="start">
		<video controls muted>
			<source src="https://videos.pexels.com/video-files/29210993/12610809_1920_1080_24fps.mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

<div class="text">
  <p>Headline</p>
  <p>Supporting text</p>
</div>

<div class="end">
	100+
</div>
</li>
<li>
	<div class="start">
		<video controls muted>
			<source src="https://videos.pexels.com/video-files/29210993/12610809_1920_1080_24fps.mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

<div class="text">
  <p>Headline</p>
  <p>Supporting text</p>
</div>

<div class="end">
	100+
</div>
</li>
</ul>
</template>

<template #code>

</template>
</Example>

### Checkbox

Wrap the List item content with a `<label for="INPUTID">` to make the entire surface clickable.

<Example>
<template #example>
<ul class="list">
<li>
  <label for="checkbox-example-1">
    <div class="text">
      <p>Checkbox</p>
    </div>
    <div class="end">
      <input id="checkbox-example-1" type="checkbox" class="checkbox" />
    </div>
    </label>
</li>
<li>
  <label for="checkbox-example-2">
    <div class="text">
      <p>Checkbox</p>
    </div>
    <div class="end">
      <input id="checkbox-example-2" type="checkbox" class="checkbox" />
    </div>
    </label>
</li>

</ul>
</template>

<template #code>

```html
<li>
  <label for="checkbox-example-1">
    <div class="text"></div>
    <div class="end">
      <input class="checkbox" id="checkbox-example-1" type="checkbox" />
    </div>
  </label>
</li>
```

</template>
</Example>

### Radio

Wrap the List item content with a `<label for="INPUTID">` to make the entire surface clickable.
Add a common name to each `<input>` for radio group behavior.

<Example hideCode>
<template #example>
<ul class="list">
<li>
  <label for="radio-example-1">
    <div class="text">
      <p>Radio 1</p>
    </div>
    <div class="end">
      <input class="radio" id="radio-example-1" name="radio-example-group-1" type="radio"  />
    </div>
    </label>
</li>

<li>
  <label for="radio-example-2">
    <div class="text">
      <p>Radio 2</p>
    </div>
    <div class="end">
      <input id="radio-example-2" name="radio-example-group-1" type="radio" class="radio" />
    </div>
    </label>
</li>

</ul>
</template>

<template #code>

```html
<li>
  <label for="radio-example-1">
    <div class="text">Radio 1</div>
    <div class="end">
      <input
        class="radio"
        id="radio-example-1"
        name="radio-example-group"
        type="radio"
      />
    </div>
  </label>
</li>

<li>
  <label for="radio-example-2">
    <div class="text">Radio 2</div>
    <div class="end">
      <input
        class="radio"
        id="radio-example-2"
        name="radio-example-group"
        type="radio"
      />
    </div>
  </label>
</li>
```

</template>
</Example>

### Switch

## Inset

<Example hideCode>

<template #example>

<ul class="list">
<li>
	<div class="start">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
  <p>No inset</p>
</div>
</li>

<li class="inset">
  <div class="text">
    <p>Inset class</p>
    <p>Makes the text line up nicely</p>
  </div>
</li>

<li class="inset">
	<div class="start">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.94 5l5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/></svg>
	</div>
<div class="text">
	<p>Inset class</p>
  <p>Any <code>div.start</code> will be hidden when inset</p>
</div>
</li>
</ul>
</template>

<template #code>

```html
<ul class="list">
  <li>
    <div class="start">
      <svg></svg>
    </div>

    <div class="text">
      <p>No inset</p>
    </div>
  </li>

  <li class="inset">
    <div class="text">
      <p>Inset class</p>
      <p>Makes the text line up nicely</p>
    </div>
  </li>

  <li class="inset">
    <div class="start">
      <svg></svg>
    </div>
    <div class="text">
      <p>Inset class</p>
      <p>Any <code>div.start</code> will be hidden when inset</p>
    </div>
  </li>
</ul>
```

</template>
</Example>

## Borders

### On every item

Apply the `.bordered` class on the `ul.list` element to give all list items a border.

<Example>
<template #example>
<ul class="list bordered">
  <li>
    <div class="text">
      <p>Headline</p>
    </div>
  </li>
   <li>
    <div class="text">
      <p>Headline</p>
    </div>
  </li>
    <li>
    <div class="text">
      <p>Headline</p>
    </div>
  </li>
</ul>
</template>

<template #code>

```html
<ul class="list bordered">
  <!--  -->
</ul>
```

</template>
</Example>

### On one item

Apply the `.border-top` class on a `li.list` item to give it an upper border.

<Example>
<template #example>

<ul class="list">
	<li>
<div class="text">
	<p>Help</p>
</div>
</li>
<li>
<div class="text">
	<p>I need borders</p>
</div>
</li>
	<li class="border-top">
<div class="text">
	<p>Thanks</p>
</div>

</li>
</ul>

</template>

<template #code>

```html
<ul class="list">
  <li></li>
  <li></li>
  <li class="border-top"></li>
</ul>
```

</template>
</Example>

## Anatomy

1. Container: `ul.list`
2. List item: `li`
3. Content wrapper (optional): `a`, `button`, `label`
4. Start content (optional): `.start` > `svg`, `img`, `video`
5. Text content: `.text` > `p`, `p + p`
6. End content (optional): `.end` > `svg`, `p`, `button`, `a`, `input`

<Example>
<template #example>
<ul class="list anatomy">
  <li class="anatomy">
    <div class="start">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 10.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m5.5 1.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m-8.5 4a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m3-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M10.537 2.534a2.25 2.25 0 0 1 2.903-.002L20.2 8.23c.507.427.8 1.057.8 1.72v9.299A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25v-9.3c0-.662.292-1.29.797-1.718zm1.936 1.145a.75.75 0 0 0-.968 0l-6.74 5.698a.75.75 0 0 0-.265.573v9.3c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25v-9.3a.75.75 0 0 0-.267-.573z"/></svg>
    </div>
    <div class="text">
      <p>Text</p>
    </div>
    <div class="end">15%</div>
  </li>
</ul>
</template>

<template #code>

```html
<ul class="list">
  <li>
    <button>
      <div class="start"></div>
      <div class="text"></div>
      <div class="end"></div>
    </button>
  </li>
</ul>
```

</template>
</Example>

## API

<!--@include: ./list-api.md -->

## Browser compatibility

<Baseline />

## Installation

<<< @/../src/data-display/list.css
