<template>
  <section class="VPTeamPageSection">
    <div class="title">
      <div class="title-line" />
      <h2 v-if="$slots.title" class="title-text">
        <slot name="title" />
      </h2>
    </div>
    <p v-if="$slots.lead" class="lead">
      <slot name="lead" />
    </p>
    <div v-if="$slots.members" class="members">
      <slot name="members" />
    </div>
  </section>
</template>

<style scoped>
.VPTeamPageSection {
  padding: 0 32px;
}

@media (min-width: 768px) {
  .VPTeamPageSection {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPTeamPageSection {
    padding: 0 64px;
  }
}

.title {
  position: relative;
  margin: 0 auto;
  max-width: 1152px;
  text-align: center;
  color: var(--text-color-2-78);
}

.title-line {
  position: absolute;
  top: 16px;
  inset-inline-start: 0;
  width: 100%;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.title-text {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

.lead {
  margin: 0 auto;
  max-width: 480px;
  padding-block-start: 12px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color-2-78);
}

.members {
  padding-block-start: 40px;
}
</style>
