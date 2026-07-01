<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            v-if="experience.company.url"
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="experience.company.color ? { color: experience.company.color } : undefined"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <img
                v-if="experience.company.logo?.startsWith('http')"
                :src="experience.company.logo"
                :alt="`Logo ${experience.company.name}`"
                class="size-5 object-contain shrink-0 rounded-md"
              >
              <UIcon
                v-else-if="experience.company.logo"
                :name="experience.company.logo"
              />
            </div>
          </ULink>
          <div
            v-else
            class="flex items-center gap-1"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <span class="text-sm font-medium text-highlighted">
              {{ experience.company.name }}
            </span>
          </div>
        </Motion>

        <UButton
          to="/resume/curriculo.html"
          target="_blank"
          label="Ver currículo completo"
          color="neutral"
          variant="ghost"
          size="sm"
          trailing-icon="i-lucide-arrow-up-right"
          class="mt-3 w-fit px-0"
        />
      </div>
    </template>
  </UPageSection>
</template>
