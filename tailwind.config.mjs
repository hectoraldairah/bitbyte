/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rosewater: '#f4c8a5',
        poison: '#13001b',
        flamingo: '#f2cdcd',
        brid: '#EDCDBB',
        pink: '#f5c2e7',
        mauve: '#cba6f7',
        red: '#eb455c',
        maroon: '#eba0ac',
        peach: '#fab387',
        yellow: '#f9e2af',
        green: '#a6e3a1',
        teal: '#94e2d5',
        sky: '#89dceb',
        sapphire: '#74c7ec',
        blue: '#354059',
        lavender: '#b4befe',
        text: '#CAD3F5',
        subtext1: '#bac2de',
        subtext0: '#a6adc8',
        overlay2: '#9399b2',
        overlay1: '#7f849c',
        overlay0: '#6c7086',
        surface2: '#585b70',
        surface1: '#45475a',
        surface0: '#313244',
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
      },
      boxShadow: {
        rose: '15px 15px hsl(30, 77%, 80%)'
      }
    },
  },
  plugins: [],
}
