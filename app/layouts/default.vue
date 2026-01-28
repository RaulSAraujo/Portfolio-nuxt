<script lang="ts" setup></script>

<template>
  <div>
    <UContainer class="sm:border-x border-default">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
