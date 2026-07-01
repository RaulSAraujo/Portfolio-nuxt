<script lang="ts" setup>
import type { IndexCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()
const { fadeIn } = useMotionPreset()

const headlineMotion = fadeIn({ delay: 0.1, duration: 0.3 })
const titleMotion = fadeIn({ delay: 0.1, duration: 0.4 })
const descriptionMotion = fadeIn({ delay: 0.3, duration: 0.4 })
const linksMotion = fadeIn({ delay: 0.5, duration: 0.5 })

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    id="contact"
    class="scroll-mt-24 pt-14 sm:pt-16"
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion v-bind="headlineMotion">
        <UColorModeAvatar
          class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion v-bind="titleMotion">
        <h1 class="text-balance">
          {{ page.title }}
        </h1>
      </Motion>
    </template>

    <template #description>
      <Motion v-bind="descriptionMotion">
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion v-bind="linksMotion">
        <div
          v-if="page.hero.links?.length"
          class="flex flex-col sm:flex-row items-center gap-2"
        >
          <UButton v-bind="{ ...(page.hero.links[0] || {}) }" />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2"
            :disabled="!global.available"
            :to="global.available ? `mailto:${global.email}` : undefined"
            :label="global.available ? 'Disponível para novos projetos' : 'Não disponível no momento'"
          >
            <template #leading>
              <span class="relative flex size-2" aria-hidden="true">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75 motion-reduce-ping-none"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>
    </template>
  </UPageHero>
</template>
