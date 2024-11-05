<style scoped>
	@import "../../../src/button/button-base.css";
  @import "../../../src/button/button-variants.css";
  @import "../../../src/surfaces/card.css";

	.anatomy {
    outline: 2px solid tomato;
    outline-offset: 3px;
		:is(.header, .content, .actions) {
			outline: 2px solid tomato;
			outline-offset: -2px;
		}
	}
</style>

# Card

## Variants

<div class="example-wrapper">
   <div class="example stack">

<div class="card"><div class="content">Elevated</div></div>

<div class="card tonal"><div class="content">Tonal</div></div>

<div class="card outlined"><div class="content">Outlined</div></div>

  </div>

```html
<div class="card">
  <div class="content">Elevated</div>
</div>

<div class="card tonal">
  <div class="content">Tonal</div>
</div>

<div class="card outlined">
  <div class="content">Outlined</div>
</div>
```

</div>

## Anatomy

Open Props UI include these complementary utility components to handle various use cases:

1. Container
2. `.header` (optional): a wrapper for the card header
3. `.content` (optional): a wrapper for the card content
4. `.actions` (optional): a wrapper for that groups a set of buttons

<div class="example-wrapper">
   <div class="example stack">

<div class="card anatomy">
		<div class="header">
			<h2 class="h4">Headline</h2>
			<p>Subhead</p>
		</div>
		<div class="content">Explain more about the topic shown in the headline and subhead through supporting text.</div>
		<div class="actions">
			<button class="button">Cancel</button>
			<button class="button filled">Save</button>
		</div>
	</div>

  </div>

```html
<div class="card">
  <div class="header">
    <h2 class="h4">Headline</h2>
    <p>Subhead</p>
  </div>
  <div class="content">
    Explain more about the topic shown in the headline and subhead through
    supporting text.
  </div>
  <div class="actions">
    <button class="button">Cancel</button>
    <button class="button filled">Save</button>
  </div>
</div>
```

</div>

## API

These are the classes and attributes a card can be styled with. As usual, feel free to add your own!

| Type                                | Modifiers                               | Default     | Description                          |
| ----------------------------------- | --------------------------------------- | ----------- | ------------------------------------ |
| [Building blocks](#building-blocks) | `& .header`, `& .content`, `& .actions` | -           | Optional wrappers for child content. |
| [Variants](#variants)               | `.elevated`, `.tonal`,s `.outlined`,    | `.elevated` | The variant to use.                  |
