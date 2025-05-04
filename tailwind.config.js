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
        DEFAULT: {
            css: {
                '--tw-prose-body': theme('colors.text-secondary'),
                '--tw-prose-headings': theme('colors.text-primary'),
                '--tw-prose-lead': theme('colors.text-secondary'),
                '--tw-prose-links': theme('colors.accent'), // Usa sua cor accent
                '--tw-prose-bold': theme('colors.text-primary'),
                '--tw-prose-counters': theme('colors.text-secondary'),
                '--tw-prose-bullets': theme('colors.accent'), // Usa sua cor accent
                '--tw-prose-hr': theme('colors.border-color'),
                '--tw-prose-quotes': theme('colors.text-primary'),
                '--tw-prose-quote-borders': theme('colors.border-color'),
                '--tw-prose-captions': theme('colors.text-secondary'),
                '--tw-prose-code': theme('colors.red-bright'), // Cor para código inline
                '--tw-prose-pre-code': theme('colors.gray[300]'), // Cor do texto no bloco de código
                '--tw-prose-pre-bg': theme('colors.bg-card'),    // Fundo do bloco de código
                '--tw-prose-th-borders': theme('colors.border-color'),
                '--tw-prose-td-borders': theme('colors.border-color'),
                // Cores invertidas para o tema dark
                '--tw-prose-invert-body': theme('colors.text-secondary'),
                '--tw-prose-invert-headings': theme('colors.text-primary'),
                '--tw-prose-invert-lead': theme('colors.text-secondary'),
                '--tw-prose-invert-links': theme('colors.accent'),
                '--tw-prose-invert-bold': theme('colors.text-primary'),
                '--tw-prose-invert-counters': theme('colors.text-secondary'),
                '--tw-prose-invert-bullets': theme('colors.accent'),
                '--tw-prose-invert-hr': theme('colors.border-color'),
                '--tw-prose-invert-quotes': theme('colors.text-primary'),
                '--tw-prose-invert-quote-borders': theme('colors.border-color'),
                '--tw-prose-invert-captions': theme('colors.text-secondary'),
                '--tw-prose-invert-code': theme('colors.red-bright'),
                '--tw-prose-invert-pre-code': theme('colors.gray[300]'),
                '--tw-prose-invert-pre-bg': theme('colors.bg-card'),
                '--tw-prose-invert-th-borders': theme('colors.border-color'),
                '--tw-prose-invert-td-borders': theme('colors.border-color'),
                // Remover arredondamento padrão do prose se quiser
                // code: { borderRadius: '0 !important' },
                // 'code::before': { content: 'none !important' },
                // 'code::after': { content: 'none !important' },
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
      animation: {
        fadeIn: 'fadeIn 0.8s ease forwards',
        slideInLeft: 'slideInLeft 0.8s ease forwards',
        slideInRight: 'slideInRight 0.8s ease forwards',
        pulse: 'pulse 4s infinite ease-in-out 1s',
        float: 'float 18s ease-in-out infinite',
        floatReverse: 'float 22s ease-in-out infinite reverse', // Para shape 2
        scroll: 'scrollAnimation 2.5s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        gradientShift: 'gradientShift 20s ease infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Adiciona o plugin
  ],
}