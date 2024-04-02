export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted: function (element, binding) {
      element.clickOutsideEvent = function (event) {
        const excludeComponent = document.getElementById(binding.arg)
  
        if (
          !(element == event.target || element.contains(event.target)) &&
          !(
            excludeComponent &&
            (event.target == excludeComponent || excludeComponent.contains(event.target))
          )
        ) {
          binding.value(event, element)
        }
      }
      document.addEventListener('click', element.clickOutsideEvent)
    },
    unmounted: function (element) {
      document.removeEventListener('click', element.clickOutsideEvent)
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})