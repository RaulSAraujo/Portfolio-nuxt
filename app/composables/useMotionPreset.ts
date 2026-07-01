const VISIBLE = { scale: 1, opacity: 1, filter: 'blur(0px)' }
const HIDDEN_BLUR = { scale: 1.1, opacity: 0, filter: 'blur(20px)' }
const VISIBLE_SLIDE = { opacity: 1, transform: 'translateY(0)' }
const HIDDEN_SLIDE = { opacity: 0, transform: 'translateY(20px)' }

export function useMotionPreset() {
  const reducedMotion = ref(false)

  if (import.meta.client) {
    reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      reducedMotion.value = mediaQuery.matches
    }

    update()
    mediaQuery.addEventListener('change', update)
    onUnmounted(() => mediaQuery.removeEventListener('change', update))
  })

  const isReduced = computed(() => reducedMotion.value)

  function fadeIn(options?: { delay?: number, duration?: number }) {
    const delay = options?.delay ?? 0
    const duration = options?.duration ?? 0.3

    return computed(() => ({
      initial: isReduced.value ? VISIBLE : HIDDEN_BLUR,
      animate: VISIBLE,
      transition: isReduced.value ? { duration: 0 } : { duration, delay }
    }))
  }

  function slideUp(options?: { delay?: number }) {
    const delay = options?.delay ?? 0

    return computed(() => ({
      initial: isReduced.value ? VISIBLE_SLIDE : HIDDEN_SLIDE,
      whileInView: VISIBLE_SLIDE,
      transition: isReduced.value ? { duration: 0 } : { delay }
    }))
  }

  return { isReduced, fadeIn, slideUp }
}
