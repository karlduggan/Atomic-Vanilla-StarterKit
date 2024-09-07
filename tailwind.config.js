/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.html',  // Adjust path to where your HTML files are
    './src/**/*.js',          // Adjust path to where your JS files are
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../assets/images/active-wheelchair-user-in-park-with-carer.webp")'
      },
      colors: {
        // Light mode colors
        primary: '#FFFFFF', // Main Color (Dominant)
        secondary: '#FE8D41', // 2nd Main Color (Dominant)
        tertiary: '#027BDC',
        paragraph: '#999999',
        highlight: '#FB8B3F', // Accent contrast (Accent)
        base1: '#EEEEEE', // Neautral (Accent)
        base2: '#F4F7F5', // Neautral (Accent)
        background: '#929292',
        
        // Dark mode colors
        dark: {
          primary: '#FFFFFF', 
          secondary: '#FFFFFF', // Example: Light green color
          paragraph: '#FFFFFF',
          highlight: '#ccccff', // Example: Light blue color
          background: '#000000'
        }
      },
    
      fontFamily: {
        serif: ['Merriweather', 'serif'], // Example of adding a serif font
        mono: ['Sarala', 'monospace'], // Example of adding a monospace font
        handwriting: ['Pacifico', 'cursive'],
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode variants for background colors
      textColor: ['dark'], // Enable dark mode variants for text colors
    },
  },
  plugins: [
    // require('tailwindcss-dark-mode')(), // Enable dark mode plugin
  ],
  darkMode: 'class',
}

