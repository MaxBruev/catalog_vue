<template>
  <header class="app-header app-container">
    <div class="app-header__content">
      <router-link class="logo-block" to="/">
        <ui-header
          :typeHeader="'h2'"
          :colorHeader="'text-1'"
          :contentHeader="'S—Shop'"
          :fontSizeHeader="24"
        />
      </router-link>
      <div class="nav-block">
        <router-link
          v-for="(item, index) in getNavList"
          :key="index"
          :to="item.link"
        >
          <ui-text
            :colorText="item.color"
            :contentText="item.text"
            :fontSizeText="18"
            :typeText="'medium'"
          />
        </router-link>
      </div>
      <app-menu />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue"

import { TColorTypes, UiHeader, UiText } from '@/ui'

import AppMenu from '@/components/layouts/app-layout/app-menu/AppMenu.vue'

interface INav {
  text: string,
  active: boolean,
  color: TColorTypes
  link: string
}

export default Vue.extend({
  name: "AppHeader",
  components: { AppMenu, UiText, UiHeader },
  computed: {
    getNavList(): Array<INav> {
      return [
        {
          text: 'Catalog',
          active: this.$route.path === '/catalog',
          color: this.$route.path === '/catalog' ? 'accent' : 'text-1',
          link: 'catalog'
        }
      ]
    },
  }
})
</script>

<style lang="scss">
@use './AppHeader.scss';
</style>
