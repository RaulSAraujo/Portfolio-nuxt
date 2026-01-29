<script lang="ts" setup>
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection :ui="{ container: '!pt-0' }">
    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.3,
        delay: 1.2
      }"
    >
      <UMarquee
        pause-on-hover
        class="max-w-screen-lg mx-auto flex items-center justify-center"
      >
        <UIcon
          v-for="skill in page.skills"
          :key="skill.name"
          :name="skill.icon"
          :class="`size-10 shrink-0 text-${skill.color}-500 hover:text-${skill.color}-600 hover:scale-110 transition-all duration-300`"
        />
      </UMarquee>
    </Motion>
  </UPageSection>
</template>
