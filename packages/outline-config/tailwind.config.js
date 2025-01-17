const screenSizes = {
  'full-screen-w': '100vw',
  'half-screen-w': '50vw',
  'quarter-screen-w': '25vw',
  'full-screen-h': '100vh',
  'half-screen-h': '50vh',
  'quarter-screen-h': '25vh',
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  mode: 'jit',
  content: [
    './packages/outline-storybook/.storybook/stories/**/*.{ts,tsx,mdx,html,txt,css}',
  ],
  theme: {
    // Utilizing CSS properties here (screens) caused
    // the responsive tailwind classes to simply fail.
    // @todo: Make screens work with css variables.
    // screens: {
    //   xs: 'var(--screen-xs)',
    //   sm: 'var(--screen-sm)',
    //   md: 'var(--screen-md)',
    //   lg: 'var(--screen-lg)',
    //   xl: 'var(--screen-xl)',
    //   xxl: 'var(--screen-xxl)',
    //   xxxl: 'var(--screen-xxxl)',
    // },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '2180px',
    },
    colors: {
      // Demo styles specific to Storybook implementation.
      // Do not remove.
      'outline': {
        'phase2-blue': 'var(--outline-phase2-blue)',
        'karma-coral': 'var(--outline-karma-coral)',
        'soft-black': 'var(--outline-soft-black)',
        'not-gray': 'var(--outline-not-gray)',
        'misty-teal': 'var(--outline-misty-teal)',
        'electric-violet': 'var(--outline-electric-violet)',
        'dusty-blue': 'var(--outline-dusty-blue)',
        'transparent': 'var(--outline-transparent)',
        'white': 'var(--outline-white)',
        'black': 'var(--outline-black)',
      },

      // Custom Brand colors can be added/edited here.
      'brand': {
        primary: 'var(--brand-primary)',
        secondary: 'var(--brand-secondary)',
        tertiary: 'var(--brand-tertiary)',
        quaternary: 'var(--brand-quaternary)',
        quinary: 'var(--brand-quinary)',
        senary: 'var(--brand-senary)',
        septenary: 'var(--brand-septenary)',
        octonary: 'var(--brand-octonary)',
        nonary: 'var(--brand-nonary)',
        denary: 'var(--brand-denary)',
      },

      // These are used for system alerts and should not be removed.
      'ui': {
        error: 'var(--status-error)',
        warning: 'var(--status-warning)',
        info: 'var(--status-info)',
        success: 'var(--status-success)',
      },

      // The defaults are completely overwritten, so manually including
      // sets from Tailwind CSS we want to use.
      // You may remove any/all of these items assuming you have removed
      // or changed any references above that depend on these.
      'outline-gray': {
        50: 'var(--outline-gray-50)',
        100: 'var(--outline-gray-100)',
        200: 'var(--outline-gray-200)',
        300: 'var(--outline-gray-300)',
        400: 'var(--outline-gray-400)',
        500: 'var(--outline-gray-500)',
        600: 'var(--outline-gray-600)',
        700: 'var(--outline-gray-700)',
        800: 'var(--outline-gray-800)',
        900: 'var(--outline-gray-900)',
      },
      'outline-blue': {
        50: 'var(--outline-blue-50)',
        100: 'var(--outline-blue-100)',
        200: 'var(--outline-blue-200)',
        300: 'var(--outline-blue-300)',
        400: 'var(--outline-blue-400)',
        500: 'var(--outline-blue-500)',
        600: 'var(--outline-blue-600)',
        700: 'var(--outline-blue-700)',
        800: 'var(--outline-blue-800)',
        900: 'var(--outline-blue-900)',
      },
    },
    fontSize: {
      'xs': ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
      'sm': ['var(--fs-sm)', { lineHeight: 'var(--lh-sm)' }],
      'base': ['var(--fs-base)', { lineHeight: 'var(--lh-base)' }],
      'lg': ['var(--fs-lg)', { lineHeight: 'var(--lh-lg)' }],
      'xl': ['var(--fs-xl)', { lineHeight: 'var(--lh-xl)' }],
      '2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
      '3xl': ['var(--fs-3xl)', { lineHeight: 'var(--lh-3xl)' }],
      '4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
      '5xl': ['var(--fs-5xl)', { lineHeight: 'var(--lh-5xl)' }],
      '6xl': ['var(--fs-6xl)', { lineHeight: 'var(--lh-6xl)' }],
      '7xl': ['var(--fs-7xl)', { lineHeight: 'var(--lh-7xl)' }],
      '8xl': ['var(--fs-8xl)', { lineHeight: 'var(--lh-8xl)' }],
      '9xl': ['var(--fs-9xl)', { lineHeight: 'var(--lh-9lx)' }],
      'h1': ['var(--fs-h1)', { lineHeight: 'var(--lh-h1)' }],
      'h1-small': ['var(--fs-h1-small)', { lineHeight: 'var(--lh-h1-small)' }],
      'h1-medium': [
        'var(--fs-h1-medium)',
        { lineHeight: 'var(--lh-h1-medium)' },
      ],
      'h2': ['var(--fs-h2)', { lineHeight: 'var(--lh-h2)' }],
      'h2-small': ['var(--fs-h2-small)', { lineHeight: 'var(--lh-h2-small)' }],
      'h2-medium': [
        'var(--fs-h2-medium)',
        { lineHeight: 'var(--lh-h2-medium)' },
      ],
      'h3': ['var(--fs-h3)', { lineHeight: 'var(--lh-h3)' }],
      'h3-small': ['var(--fs-h3-small)', { lineHeight: 'var(--lh-h3-small)' }],
      'h3-medium': [
        'var(--fs-h3-medium)',
        { lineHeight: 'var(--lh-h3-medium)' },
      ],
      'h4': ['var(--fs-h4)', { lineHeight: 'var(--lh-h4)' }],
      'h4-small': ['var(--fs-h4-small)', { lineHeight: 'var(--lh-h4-small)' }],
      'h4-medium': [
        'var(--fs-h4-medium)',
        { lineHeight: 'var(--lh-h4-medium)' },
      ],
      'h5': ['var(--fs-h5)', { lineHeight: 'var(--lh-h5)' }],
      'h5-small': ['var(--fs-h5-small)', { lineHeight: 'var(--lh-h5-small)' }],
      'h5-medium': [
        'var(--fs-h5-medium)',
        { lineHeight: 'var(--lh-h5-medium)' },
      ],
      'h6': ['var(--fs-h6)', { lineHeight: 'var(--lh-h6)' }],
      'h6-small': ['var(--fs-h6-small)', { lineHeight: 'var(--lh-h6-small)' }],
      'h6-medium': [
        'var(--fs-h6-medium)',
        { lineHeight: 'var(--lh-h6-medium)' },
      ],
    },
    fontWeight: {
      thin: 'var(--fw-extralight)',
      extralight: 'var(--fw-thin)',
      light: 'var(--fw-light)',
      normal: 'var(--fw-normal)',
      medium: 'var(--fw-medium)',
      semibold: 'var(--fw-semibold)',
      bold: 'var(--fw-bold)',
      extrabold: 'var(--fw-extrabold)',
      black: 'var(--fw-black)',
    },
    extend: {
      boxShadow: {
        'lg': '0px 8px 32px rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 1px rgb(33, 74, 222)',
        'focus-2': '0 0 0 2px rgb(33, 74, 222)',
        'focus-error': '0 0 0 1px rgb(225, 9, 9)',
      },
      gridTemplateColumns: {
        '1-2': '4fr 8fr',
        '2-1': '8fr 4fr',
      },
      fontFamily: {
        display: [`var(--ff-display)`],
        body: [`var(--ff-body)`],
        demo: [`var(--ff-demo)`],
      },
      height: {
        ...screenSizes,
      },
      maxHeight: {
        ...screenSizes,
      },
      width: {
        ...screenSizes,
      },
      maxWidth: {
        ...screenSizes,
      },
      opacity: {
        40: '0.4',
      },
    },
  },
  plugins: [],
};
