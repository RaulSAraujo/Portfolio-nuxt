export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://github.com/RaulSAraujo.png',
      light: 'https://github.com/RaulSAraujo.png',
      alt: 'Raul S. Araujo'
    },
    email: 'raul.araujo.2000@hotmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© Raul S. Araujo ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/raulsaraujo/',
        'target': '_blank',
        'aria-label': 'LinkedIn'
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/raul.saraujo/',
        'target': '_blank',
        'aria-label': 'Instagram'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/RaulSAraujo',
        'target': '_blank',
        'aria-label': 'GitHub'
      }
    ]
  }
})
