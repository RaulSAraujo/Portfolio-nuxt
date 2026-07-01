<script lang="ts" setup>
import type { IndexCollectionItem } from '@nuxt/content'

const { isReduced, fadeIn } = useMotionPreset()
const skillsMotion = fadeIn({ delay: 1.2, duration: 0.3 })

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="skills"
    class="scroll-mt-24"
    :ui="{ container: '!pt-0 !pb-0' }"
  >
    <Motion v-bind="skillsMotion">
      <div
        v-if="isReduced"
        class="max-w-screen-lg mx-auto flex flex-wrap items-center justify-center gap-6 px-4"
      >
        <div
          v-for="skill in page.skills"
          :key="skill.name"
          class="inline-flex items-center gap-2"
        >
          <UIcon
            :name="skill.icon"
            aria-hidden="true"
            :class="`size-8 shrink-0 text-${skill.color}-500`"
          />
          <span class="text-sm text-muted">{{ skill.name }}</span>
        </div>
      </div>

      <UMarquee
        v-else
        pause-on-hover
        class="max-w-screen-lg mx-auto flex items-center justify-center"
      >
        <span
          v-for="skill in page.skills"
          :key="skill.name"
          role="img"
          :aria-label="skill.name"
          class="inline-flex"
        >
          <UIcon
            :name="skill.icon"
            aria-hidden="true"
            :class="`size-10 shrink-0 text-${skill.color}-500 hover:text-${skill.color}-600 hover:scale-110 transition-[transform,color] duration-300`"
          />
        </span>
      </UMarquee>
    </Motion>
  </UPageSection>
</template>
