// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        gpu: 'gpu 1s infinite'
      },
      keyframes: {
        gpu: {
          '0%': { transform: 'translateZ(0)' },
          '100%': { transform: 'translateZ(0)' }
        }
      }
    }
  }
}