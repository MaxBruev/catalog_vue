<template>
  <div class="ui-icon" :style="{'--size-icon': getSizeIcon}">
    <img :src="getIcon" alt="icon">
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { TIconTypes } from '@/ui'

export default Vue.extend({
  name: 'UiIcon',
  props: {
    nameIcon: {
      type: String as PropType<TIconTypes>,
      required: true,
      default: 'cross'
    },
    sizeIcon: {
      type: Number,
      required: true
    }
  },
  computed: {
    getIcon(): string {
      return require(`@/assets/img/ui/${this.nameIcon}.svg`)
    },
    getSizeIcon(): string {
      return `${this.sizeIcon}px`
    }
  }
})
</script>

<style lang="scss">
@use './UiIcon.scss';
</style>
