<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

useSeoMeta({
  titleTemplate: '%s - Raul Araujo',
  ogImage: 'https://github.com/RaulSAraujo.png'
})
</script>

<template>
  <UApp>
    <a href="#main-content" class="skip-link">
      Ir para o conteúdo principal
    </a>

    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <NuxtLayout>
      <UMain id="main-content" class="relative" tabindex="-1">
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
