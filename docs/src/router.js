import Introduction from './pages/Introduction.vue'

function lazyLoad(component) {
  return (resolve) => require([`./pages/${component}.vue`], resolve)
}

const Button = lazyLoad('elements/Button')
const Divider = lazyLoad('elements/Divider')
const Item = lazyLoad('views/Item')

export const routes = [
  { path: '/', component: Introduction },
  { path: '/elements/button.html', component: Button },
  { path: '/elements/divider.html', component: Divider },
  { path: '/views/item.html', component: Item }
]
