import plugin from 'tailwindcss/plugin'
import theme from './theme.mjs'
import { light } from './theme-tokens.mjs'

const toCssVars = (tokens) =>
  Object.fromEntries(Object.entries(tokens).map(([name, value]) => [`--color-${name}`, value]))

const blipDs = plugin(
  ({ addBase }) => {
    addBase({ ':root': toCssVars(light) })
  },
  {
    theme: {
      extend: theme,
    },
  },
)

export default blipDs
export { theme }
