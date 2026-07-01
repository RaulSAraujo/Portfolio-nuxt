<script setup lang="ts">
const props = defineProps<{
  src?: string | null
  alt: string
}>()

const loaded = ref(false)
const failed = ref(false)

watch(
  () => props.src,
  () => {
    loaded.value = false
    failed.value = false
  }
)

const initial = computed(() => props.alt.trim().charAt(0).toUpperCase() || '?')

const showPlaceholder = computed(
  () => !props.src || failed.value || !loaded.value
)
</script>

<template>
  <div
    class="relative h-48 w-full overflow-hidden rounded-lg bg-elevated/50 ring-1 ring-default"
  >
    <div
      v-if="showPlaceholder"
      class="absolute inset-0 flex items-center justify-center"
      role="img"
      :aria-label="`Pré-visualização indisponível para ${alt}`"
    >
      <span
        class="select-none text-4xl font-semibold text-muted"
        aria-hidden="true"
      >
        {{ initial }}
      </span>
    </div>
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="h-full w-full object-cover"
      :class="{ 'opacity-0': showPlaceholder }"
      loading="lazy"
      @load="loaded = true"
      @error="failed = true"
    >
  </div>
</template>
