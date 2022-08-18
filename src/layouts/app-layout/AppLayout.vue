<template>
  <div class="app-layout">
    <app-header />
    <main class="app-container">
      <slot />
    </main>
    <app-footer />

    <div v-if="isBloor" class="blur-window" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from 'vuex'

import {AppHeader, AppFooter} from "@/components/layouts";

export default Vue.extend({
  name: "AppLayout",
  components: {AppFooter, AppHeader},
  watch: {
    isBloor() {
      if (this.isBloor) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  },
  computed: {
    ...mapState(['isBloor'])
  }
})
</script>

<style lang="scss">
@use './AppLayout.scss';
</style>
