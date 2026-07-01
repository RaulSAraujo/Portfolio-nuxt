<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'
import { slugify } from '~/utils/slug'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const route = useRoute()
const router = useRouter()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      value: slugify(faq.title),
      questions: faq.questions
    }
  })
})

const activeTab = computed({
  get() {
    const query = route.query.faq as string | undefined
    const values = items.value?.map(item => item.value) ?? []
    if (query && values.includes(query)) {
      return query
    }
    return values[0] ?? ''
  },
  set(value: string) {
    router.replace({ query: { ...route.query, faq: value } })
  }
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
  indicator: 'absolute top-[4px] duration-200 ease-out rounded-lg bg-elevated/60 focus-visible:ring-2 focus-visible:ring-primary',
  trigger: 'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted focus-visible:ring-2 focus-visible:ring-primary',
  label: 'truncate'
}
</script>

<template>
  <UPageSection
    id="faq"
    class="scroll-mt-24"
    :title="page.faq.title"
    :description="page.faq.description"
    :ui="{
      container: 'px-0 !pt-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium text-pretty',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <UTabs
      v-model="activeTab"
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <UAccordion
          trailing-icon="lucide:plus"
          :items="item.questions"
          :unmount-on-hide="false"
          :ui="{
            item: 'border-none',
            trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-base',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 text-base text-muted'
          }"
        >
          <template #body="{ item: _item }">
            <MDC
              :value="_item.content"
              unwrap="p"
              class="px-4"
            />
          </template>
        </UAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
