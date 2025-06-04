/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Verifique se este caminho está correto
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores originais
        'bg-primary': '#121212',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#232323',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a0a0a0',
        'accent': '#AF001D',
        'accent-hover': '#95011F',
        'accent-light': 'rgba(175, 0, 29, 0.1)',
        'border-color': '#333333',
        'hero-shape': '#BE0009',
        'hero-gradient-start': '#5200be24',
        // Cores adicionadas/modificadas para o novo Hero
        'custom-purple': '#5200be',     // Roxo sólido
        'bright-purple': '#a855f7',     // Roxo mais brilhante (Ex: Tailwind purple-500)
        'bright-accent': '#f43f5e',      // Vermelho/Rosa brilhante (Ex: Tailwind rose-500)
      },
      fontFamily: {
        'Corinthia': ['"Corinthia"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'gradient-start': theme('colors.accent'),
        'gradient-end': theme('colors.accent-hover'),
      }),
      typography: (theme) => ({
        DEFAULT: { css: { /* Estilos padrão aqui, se houver */ } },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text-secondary'),
            '--tw-prose-headings': theme('colors.text-primary'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.text-primary'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.border-color'),
            '--tw-prose-quotes': theme('colors.text-primary'),
            '--tw-prose-quote-borders': theme('colors.border-color'),
            '--tw-prose-h2': theme('colors.accent'),
            '--tw-prose-pre-bg': theme('colors.bg-card'),
            '--tw-prose-pre-code': theme('colors.text-secondary'), // Ajustado para text-secondary ou gray[300] se preferir
            '--tw-prose-code': theme('colors.accent'),
            '--tw-prose-code-bg': theme('colors.bg-card'),
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            code: { fontWeight: '500', padding: '0.1em 0.3em', borderRadius: '0.25em' },
            pre: { padding: theme('padding.6') },
          },
        },
      }),
      boxShadow: {
        'sm': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'md': '0 8px 16px rgba(0, 0, 0, 0.2)',
        'lg': '0 15px 30px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 15px rgba(175, 0, 29, 0.3)',
        'glow-hover': '0 0 25px rgba(175, 0, 29, 0.5)',
      },
      textShadow: { // Adicionado para o plugin text-shadow
        'sm': '0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.3))',
        'DEFAULT': '0 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.3))',
        'lg': '0 8px 16px var(--tw-shadow-color, rgba(0,0,0,0.3))',
      },
      keyframes: {
        // Seus keyframes existentes
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: { // Modificado para usar o valor literal da sombra
          '0%, 100%': { transform: 'scale(1)', boxShadow: 'none' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 15px rgba(175, 0, 29, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scrollAnimation: {
          '0%': { transform: 'translate(-50%, 0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, 15px)', opacity: '0' },
        },
        gradientShift: { // Usado para o efeito de 'auroraPan'
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        opacityPulse: { // Seu opacityPulse original
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.35' },
        },
        // Keyframes adicionados/modificados para o novo Hero
        auroraGlow: { // Opacidade aumentada
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        subtlePulse: { // Para o botão
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(175, 0, 29, 0.3)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(175, 0, 29, 0)' },
        },
        nebulaPulse: { // Para as camadas de nébula no fundo
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        slowDrift: { // Para movimento orgânico das nébulas
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -20px) rotate(15deg)' },
          '50%': { transform: 'translate(-20px, 40px) rotate(-10deg)' },
          '75%': { transform: 'translate(10px, -30px) rotate(20deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
       slowGlowPulse: { // NOVO keyframe para os brilhos do fundo
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
      },
      animation: {
        // Suas animações existentes
        fadeIn: 'fadeIn 0.8s ease forwards',
        slideInLeft: 'slideInLeft 0.8s ease forwards',
        slideInRight: 'slideInRight 0.8s ease forwards',
        pulse: 'pulse 4s infinite ease-in-out 1s',
        float: 'float 18s ease-in-out infinite',
        floatReverse: 'float 22s ease-in-out infinite reverse',
        scroll: 'scrollAnimation 2.5s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        gradientShift: 'gradientShift 20s ease infinite', // Usado para aurora pan
        opacityPulse: 'opacityPulse 14s ease-in-out infinite',
        // Animações adicionadas/modificadas
        'aurora-glow': 'auroraGlow 12s ease-in-out infinite', // Duração ajustada
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'nebula-pulse': 'nebulaPulse 9s ease-in-out infinite alternate',
        'slow-drift': 'slowDrift 50s ease-in-out infinite alternate',
        'slow-glow-pulse': 'slowGlowPulse 18s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Plugin para text-shadow
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}