<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

<style>
  ul {
    margin: 0 auto;
    max-inline-size: 40ch;
  }
</style>

# List

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
  <p>Supporting text that truly is quite long enough to fill up multiple lines.</p>
</div>
</li>

<li class="border-top">
<div class="leading">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
</div>
<div class="text">
	<p>Headline with icon</p>
</div>
</li>

<li>
<div class="leading">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
</div>
<div class="text">
	<p>Headline</p>
  <p>Supporting text that truly is quite long enough to fill up multiple lines.</p>
</div>
</li>

<li class="inset">
<div class="text">
	<p>Inset class</p>
  <p>Makes the text line up with the icons</p>
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
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 28 28"><path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V15h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 15h6V6.25a1.75 1.75 0 0 0-1.75-1.75"/></svg>
	</div>

<div class="text">
	<p>Button with leading icon</p>
</div>
</button>
</li>

<li>
<a href="#">
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.94 5l5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/></svg>
	</div>

<div class="text">
	<p>Link with leading icon</p>
</div>
</a>
</li>

<li class="border-top">
<button>
<div class="text">
	<p>Trailing icon</p>
</div>

<div class="trailing">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M11.116 26.634a1.25 1.25 0 0 1 0-1.768L19.982 16l-8.866-8.866a1.25 1.25 0 0 1 1.768-1.768l9.75 9.75a1.25 1.25 0 0 1 0 1.768l-9.75 9.75a1.25 1.25 0 0 1-1.768 0"/></svg>
</div>
</button>
</li>

<li class="border-top">
<button>
<div class="text">
	<p>Button</p>
  <p>With trailing icon button</p>
</div>

<div class="trailing">
<button class="button">
    <span class="sr-only">Inbox</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 28 28"><path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V15h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 15h6V6.25a1.75 1.75 0 0 0-1.75-1.75"/></svg>
  </button>
</div>
</button>
</li>

<li>
<div class="text">
	<p>Trailing icon button</p>
  <p>Supporting text that truly is quite long enough to fill up multiple lines.</p>
</div>

<div class="trailing">
<button class="button">
    <span class="sr-only">Inbox</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 28 28"><path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V15h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 15h6V6.25a1.75 1.75 0 0 0-1.75-1.75"/></svg>
  </button>
</div>
</li>

</ul>

</template>

<template #code>

</template>
</Example>

## Configurations

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

<div class="trailing">
	42kb
</div>
</li>
	<li>
<div class="text">
	<p>Headline</p>
	<p>Supporting text that truly is quite long enough to fill up multiple lines.</p>
</div>

<div class="trailing">
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
    <div class="trailing">42kb</div>
  </li>

  <li>
    <div class="text">
      <p>Headline</p>
      <p>
        Supporting text that truly is quite long enough to fill up multiple
        lines.
      </p>
    </div>
    <div class="trailing">999+</div>
  </li>
</ul>
```

</template>
</Example>

### Avatar

<Example>
<template #example>
<ul class="list">

</ul>

</template>

<template #code>

</template>
</Example>

### Image

<Example>
<template #example>
<ul class="list">
<li>
	<div class="leading">
		<img src="https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<img src="https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<img src="https://images.unsplash.com/photo-1504579264001-833438f93df2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
</ul>

</template>

<template #code>

</template>
</Example>

### Video

<Example>
<template #example>
<ul class="list">
<li>
	<div class="leading">
		<video controls muted>
			<source src="https://videos.pexels.com/video-files/29210993/12610809_1920_1080_24fps.mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<video controls muted>
			<source src="https://videos.pexels.com/video-files/29210993/12610809_1920_1080_24fps.mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<video controls muted>
			<source src="https://videos.pexels.com/video-files/29210993/12610809_1920_1080_24fps.mp4" />
			Your browser does not support the video tag.
		</video>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
</ul>
</template>

<template #code>

</template>
</Example>

### Icon

<Example>
<template #example>
<ul class="list">
<li>
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
<li>
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30s6.14-.823 8.315-2.207C26.477 26.417 28 24.393 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>
	</div>

<div class="text">
	<p>Headline</p>
	<p>Supporting text</p>
</div>

<div class="trailing">
	100+
</div>
</li>
</ul>

</template>

<template #code>

</template>
</Example>

### Checkbox

<Example>
<template #example>
<ul class="list">

</ul>

</template>

<template #code>

</template>
</Example>

### Radio

<Example>
<template #example>
<ul class="list">

</ul>

</template>

<template #code>

</template>
</Example>

### Switch

<Example>
<template #example>
<ul class="list">

</ul>

</template>

<template #code>

</template>
</Example>

## Inset

<Example>
<template #example>
<ul class="list">
<li>
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.94 5l5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/></svg>
	</div>
<div class="text">
	<p>Inset class</p>
</div>
</li>

<li class="inset">
<div class="text">
	<p>Inset class</p>
  <p>Makes the text line up with the icons</p>
</div>
</li>

<li class="inset">
	<div class="leading">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.94 5l5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174l.153.144l.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/></svg>
	</div>
<div class="text">
	<p>Inset class</p>
  <p>Any <code>div.leading</code> will be hidden when inset</p>
</div>
</li>
</ul>
</template>

<template #code>

```html
<ul class="list">
  <li class="inset">
    <div class="text">
      <p>Inset class</p>
      <p>Makes the text line up with the icons</p>
    </div>
  </li>

  <li class="inset">
    <div class="text">
      <p>Inset class</p>
      <p>Makes the text line up with the icons</p>
    </div>
  </li>

  <li class="inset">
    <div class="leading">
      <svg></svg>
    </div>
    <div class="text">
      <p>Inset class</p>
      <p>Any <code>div.leading</code> will be hidden when inset</p>
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
	<p>Item 1</p>
</div>
</li>
	<li>
<div class="text">
	<p>Item 2</p>
</div>
</li>
	<li>
<div class="text">
	<p>Item 3</p>
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
	<p>Settings</p>
</div>

</li>
	<li>
<div class="text">
	<p>Help</p>
</div>

</li>
	<li class="border-top">
<div class="text">
	<p>Logout</p>
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
