import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Início',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Projetos',
    icon: 'i-lucide-folder',
    to: '/projects'
  },
  {
    label: 'Sobre mim',
    icon: 'i-lucide-user',
    to: '/about'
  }
]
