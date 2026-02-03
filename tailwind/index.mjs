import plugin from 'tailwindcss/plugin'
import theme from './theme.mjs'

const blipDs = plugin(() => {}, {
  theme: {
    extend: theme,
  },
})

export default blipDs
export { theme }
