import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Exo',
    href: 'https://fonts.googleapis.com/css?family=Rubik'
  })
}

