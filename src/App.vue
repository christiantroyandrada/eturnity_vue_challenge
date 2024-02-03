<template>
  <ThemeProvider :theme="getTheme()" :style="{ minHeight: '100%' }">
    <MenuContainerComponent/>
    <router-view />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue-styled-components"
import theme from "./assets/theme"
import MenuContainerComponent from "@/components/MenuContainer.vue"

export default {
  name: "App",
  components: {
    ThemeProvider,
    MenuContainerComponent,
  },
  methods: {
    getTheme() {
      let myTheme = theme
      return myTheme
    },
  },
}
</script>
