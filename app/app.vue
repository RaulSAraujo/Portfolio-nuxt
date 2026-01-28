<script setup lang="ts"></script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain>
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultsLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
