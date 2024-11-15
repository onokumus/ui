<script setup lang="ts">
		import Baseline from "../.vitepress/theme/app/components/Baseline.vue"
const limited = ['container-style-queries', 'scope', 'interpolate-size', 'details-content', 'accent-color']
const baseline = ['content-visibility', 'light-dark',  'color-mix', 'has','nesting']
</script>

<hgroup>
<p>Guide</p>
<h1>Browser compatibility</h1>
<p>These are the latest (and not always super-supported) features used by Open Props UI.</p>
</hgroup>

<Baseline :ids="[...limited, ...baseline]" />
