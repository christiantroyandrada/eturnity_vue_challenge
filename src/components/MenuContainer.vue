<template>
  <menu-container>
    <menu-wrapper>
      <router-link tag="a" :to="{ name: 'homePage' }">Home</router-link>
      <router-link tag="a" :to="{ name: 'marsYesterday' }"
        >Mars Yesterday</router-link
      >
      <router-link tag="a" :to="{ name: 'marsToday' }"
        >Mars Today</router-link
      >
    </menu-wrapper>
  </menu-container>
</template>

<script>
import vueStyles from "@/styles/homepage-vue-styles"

export default {
  name: 'menu-container-component',
  components: {
    MenuContainer: vueStyles.MENU_CONTAINER,
    MenuWrapper: vueStyles.MENU_WRAPPER,
  },
}
</script>