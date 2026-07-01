<script lang="ts" setup>
const { data: page, error } = await useAsyncData('index', () => queryCollection('index').first())

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Erro ao carregar a página',
    fatal: true
  })
}

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const pageData = page.value

useSeoMeta({
  title: pageData.seo.title || pageData.title,
  ogTitle: pageData.seo.title || pageData.title,
  description: pageData.seo.description || pageData.description,
  ogDescription: pageData.seo.description || pageData.description
})
</script>

<template>
  <UPage>
    <LandingHero :page="pageData" />
    <LandingMySkills :page="pageData" />
    <UPageSection
      :ui="{
        container: 'lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page="pageData" />
      <LandingWorkExperience :page="pageData" />
    </UPageSection>
    <LandingFAQ :page="pageData" />
  </UPage>
</template>
