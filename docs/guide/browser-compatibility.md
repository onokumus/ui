<script setup lang="ts">
		import Baseline from "../.vitepress/theme/app/components/Baseline.vue"
const limited = ['popover','container-style-queries', 'scope', 'interpolate-size', 'details-content', 'accent-color', 'starting-style', 'overlay']
const baseline2024 = ['details-name','transition-behavior','content-visibility', 'light-dark']
const baseline2023 = ['container-queries', 'color-mix', 'has','nesting']
</script>

<hgroup>
<p>Guide</p>
<h1>Browser compatibility</h1>
<p>These are the latest (and not always super-supported) features used by Open Props UI.</p>
</hgroup>

<Baseline :ids="[...limited, ...baseline2024, ...baseline2023]" />
