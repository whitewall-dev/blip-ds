export const colors = {
  brand: 'var(--color-brand)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  surface: {
    0: 'var(--color-surface-0)',
    1: 'var(--color-surface-1)',
    2: 'var(--color-surface-2)',
    3: 'var(--color-surface-3)',
    4: 'var(--color-surface-4)',
    positive: 'var(--color-surface-positive)',
    negative: 'var(--color-surface-negative)',
    primary: 'var(--color-surface-primary)',
  },
  content: {
    default: 'var(--color-content-default)',
    disable: 'var(--color-content-disable)',
    ghost: 'var(--color-content-ghost)',
    bright: 'var(--color-content-bright)',
    din: 'var(--color-content-din)',
  },
  border: {
    1: 'var(--color-border-1)',
    2: 'var(--color-border-2)',
    3: 'var(--color-border-3)',
  },
  info: 'var(--color-info)',
  system: 'var(--color-system)',
  focus: 'var(--color-focus)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  delete: 'var(--color-delete)',
  positive: 'var(--color-positive)',
  negative: 'var(--color-negative)',
  extended: {
    blue: 'var(--color-extended-blue)',
    'blue-bright': 'var(--color-extended-blue-bright)',
    ocean: 'var(--color-extended-ocean)',
    'ocean-bright': 'var(--color-extended-ocean-bright)',
    green: 'var(--color-extended-green)',
    'green-bright': 'var(--color-extended-green-bright)',
    yellow: 'var(--color-extended-yellow)',
    'yellow-bright': 'var(--color-extended-yellow-bright)',
    orange: 'var(--color-extended-orange)',
    'orange-bright': 'var(--color-extended-orange-bright)',
    red: 'var(--color-extended-red)',
    'red-bright': 'var(--color-extended-red-bright)',
    pink: 'var(--color-extended-pink)',
    'pink-bright': 'var(--color-extended-pink-bright)',
    gray: 'var(--color-extended-gray)',
    'gray-bright': 'var(--color-extended-gray-bright)',
  },
  hover: 'var(--color-hover)',
  pressed: 'var(--color-pressed)',
  shadow: {
    0: 'var(--color-shadow-0)',
    1: 'var(--color-shadow-1)',
  },
}

export const fontFamily = {
  blip: ['"Nunito Sans"', 'Carbona', 'Tahoma', 'Helvetica', 'Arial', 'sans-serif'],
}

export const fontSize = {
  'fs-40': '2.5rem',
  'fs-32': '2rem',
  'fs-24': '1.5rem',
  'fs-20': '1.25rem',
  'fs-16': '1rem',
  'fs-14': '0.875rem',
  'fs-12': '0.75rem',
  'fs-10': '0.625rem',
}

export const lineHeight = {
  none: '0%',
  small: '5%',
  simple: '100%',
  plus: '150%',
  double: '200%',
}

export const fontWeight = {
  regular: '400',
  'semi-bold': '600',
  bold: '700',
  'extra-bold': '800',
}

const theme = {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
}

export default theme
