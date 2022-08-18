<template>
  <footer class="app-footer">
    <div class="app-footer__content app-container">
      <div class="logo-block">
        <ui-header
          :typeHeader="'h2'"
          :colorHeader="'text-3'"
          :contentHeader="'S—Shop'"
          :fontSizeHeader="24"
        />
      </div>
      <div class="manu-block-footer">
        <ui-text
          :colorText="'text-3'"
          :contentText="'Copyright'"
          :fontSizeText="18"
          :typeText="'medium'"
        />
        <ui-text
          :colorText="'text-3'"
          :contentText="'Contacts'"
          :fontSizeText="18"
          :typeText="'medium'"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue"

import { TColorTypes, UiHeader, UiText, UiButtonText } from '@/ui'

export default Vue.extend({
  name: "AppFooter",
  components: { UiText, UiHeader },
})
</script>

<style lang="scss">
@use './AppFooter.scss';
</style>
