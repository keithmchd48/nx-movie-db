export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted (el, binding, vnode) {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})