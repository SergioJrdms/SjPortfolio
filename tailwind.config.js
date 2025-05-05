/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#121212',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#232323',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a0a0a0',
        'accent': '#AF001D',
        'accent-hover': '#95011F',
        'accent-light': 'rgba(175, 0, 29, 0.1)', // Usado para bg sutil
        'border-color': '#333333', // Renomeado de --border para evitar conflito
        'hero-shape': '#BE0009', // Cor específica do shape
        'hero-gradient-start': '#5200be24', // Roxo do gradiente hero
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        ...theme('colors'), // Permite usar cores normais em gradientes
        'gradient-start': theme('colors.accent'),
        'gradient-end': theme('colors.accent-hover'),
      }),
      // Dentro de theme: { extend: { ... } }
      typography: (theme) => ({
        DEFAULT: { css: { /* Estilos padrão aqui, se houver */ } },
        // Aplicado com a classe 'prose-invert' no componente
        invert: {
          css: {
            '--tw-prose-body': theme('colors.text-secondary'),
            '--tw-prose-headings': theme('colors.text-primary'),
            '--tw-prose-links': theme('colors.accent'),         // Links em Vermelho
            '--tw-prose-bold': theme('colors.text-primary'),
            '--tw-prose-bullets': theme('colors.accent'),      // Bullets de lista em Vermelho
            '--tw-prose-hr': theme('colors.border-color'),
            '--tw-prose-quotes': theme('colors.text-primary'),
            '--tw-prose-quote-borders': theme('colors.border-color'),
            // Títulos H2 também em vermelho para destaque
            '--tw-prose-h2': theme('colors.accent'),
            // Code blocks
            '--tw-prose-pre-bg': theme('colors.bg-card'),          // Fundo do bloco de código
            '--tw-prose-pre-code': theme('colors.gray[300]'),    // Texto dentro do bloco
            // Inline code
            '--tw-prose-code': theme('colors.red-bright'),       // Cor do texto do código inline (vermelho brilhante)
            '--tw-prose-code-bg': theme('colors.bg-card'),         // Fundo do código inline
             // Ajustes opcionais para code (remover aspas, etc.)
             'code::before': { content: 'none' },
             'code::after': { content: 'none' },
             code: { fontWeight: '500', padding: '0.1em 0.3em', borderRadius: '0.25em' }, // Estilo base pro code
             pre: { padding: theme('padding.6') }, // Mais padding no bloco de código
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
      keyframes: {
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
        pulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: 'none' },
          '50%': { transform: 'scale(1.03)', boxShadow: 'var(--tw-shadow-glow)' }, // Referencia sombra customizada
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scrollAnimation: {
           '0%': { transform: 'translate(-50%, 0)', opacity: '1' },
           '100%': { transform: 'translate(-50%, 15px)', opacity: '0' },
        },
        // borderGlow pode ser mais difícil de replicar puramente,
        // talvez usar hover:shadow-glow-hover seja suficiente
      },
      gradientShift: {
        '0%, 100%': { backgroundPosition: '0% 50%' }, // Começa e termina na esquerda
        '50%': { backgroundPosition: '100% 50%' }, // Move para a direita no meio
      },
      spinSlow: {
        'from': { transform: 'rotate(0deg)' },
        'to': { transform: 'rotate(360deg)' },
      },
      opacityPulse: {
        '0%, 100%': { opacity: '0' },    // Começa e termina invisível
        '50%': { opacity: '0.35' },     // Atinge 35% de opacidade no meio
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease forwards',
        slideInLeft: 'slideInLeft 0.8s ease forwards',
        slideInRight: 'slideInRight 0.8s ease forwards',
        pulse: 'pulse 4s infinite ease-in-out 1s',
        float: 'float 18s ease-in-out infinite',
        floatReverse: 'float 22s ease-in-out infinite reverse', // Para shape 2
        scroll: 'scrollAnimation 2.5s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        gradientShift: 'gradientShift 20s ease infinite',
        opacityPulse: 'opacityPulse 14s ease-in-out infinite', 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Adiciona o plugin
  ],
}