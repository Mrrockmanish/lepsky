module.exports = {
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      '3xl': '1600px',
      'hd': '1905px'
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem'
    },

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'bg': '#2C2C2C',
      'brown': '#B1874E',
      'gray': '#626266',
      'gray-81': '#818181',
      'gray-99': '#999999',
      'dark': '#262626',
      'dark-42': '#424242'
    }

  },

  corePlugins: {
    float: false
  },

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
  
}
