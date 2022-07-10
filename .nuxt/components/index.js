export { default as AutoClaimButton } from '../..\\components\\AutoClaimButton.vue'
export { default as Buffer } from '../..\\components\\Buffer.vue'
export { default as CounterV2 } from '../..\\components\\CounterV2.vue'
export { default as DefiLogo } from '../..\\components\\DefiLogo.vue'
export { default as Energy } from '../..\\components\\Energy.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Interval } from '../..\\components\\Interval.vue'
export { default as ItemClaim } from '../..\\components\\ItemClaim.vue'
export { default as LocalAutoClaimButton } from '../..\\components\\LocalAutoClaimButton.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as Test } from '../..\\components\\Test.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
