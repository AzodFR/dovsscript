export const AutoClaimButton = () => import('../..\\components\\AutoClaimButton.vue' /* webpackChunkName: "components/auto-claim-button" */).then(c => wrapFunctional(c.default || c))
export const Buffer = () => import('../..\\components\\Buffer.vue' /* webpackChunkName: "components/buffer" */).then(c => wrapFunctional(c.default || c))
export const CounterV2 = () => import('../..\\components\\CounterV2.vue' /* webpackChunkName: "components/counter-v2" */).then(c => wrapFunctional(c.default || c))
export const DefiLogo = () => import('../..\\components\\DefiLogo.vue' /* webpackChunkName: "components/defi-logo" */).then(c => wrapFunctional(c.default || c))
export const Deposit = () => import('../..\\components\\Deposit.vue' /* webpackChunkName: "components/deposit" */).then(c => wrapFunctional(c.default || c))
export const Energy = () => import('../..\\components\\Energy.vue' /* webpackChunkName: "components/energy" */).then(c => wrapFunctional(c.default || c))
export const Fees = () => import('../..\\components\\Fees.vue' /* webpackChunkName: "components/fees" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Interval = () => import('../..\\components\\Interval.vue' /* webpackChunkName: "components/interval" */).then(c => wrapFunctional(c.default || c))
export const ItemClaim = () => import('../..\\components\\ItemClaim.vue' /* webpackChunkName: "components/item-claim" */).then(c => wrapFunctional(c.default || c))
export const LocalAutoClaimButton = () => import('../..\\components\\LocalAutoClaimButton.vue' /* webpackChunkName: "components/local-auto-claim-button" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Test = () => import('../..\\components\\Test.vue' /* webpackChunkName: "components/test" */).then(c => wrapFunctional(c.default || c))

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
