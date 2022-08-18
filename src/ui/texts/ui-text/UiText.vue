<template>
  <div class="ui-text" :style="{'--color-text': getColorText, '--font-size-text': getFontSizeText}">
    <p v-html="contentText" :class="`ui-text__${typeText}`" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { TColorTypes, TFontType } from '@/ui'

export default Vue.extend({
  name: 'UiText',
  props: {
    fontSizeText: {
      type: Number,
      required: true
    },
    typeText: {
      type: String as PropType<TFontType>,
      required: true
    },
    contentText: {
      type: String,
      required: true
    },
    colorText: {
      type: String as PropType<TColorTypes>,
      required: false,
      default: 'text-1'
    }
  },
  computed: {
    getColorText(): string {
      let result = ''

      const colors = {
        'accent': '#FF6B00',
        'normal': '#2E2E2E',
        'text-1': '#000000',
        'text-2': '#B7B7B7',
        'text-3': '#FFFFFF',
        'text-4': '#818181',
        'bg-1': '#FFFFFF',
        'bg-2': '#1B1B1B',
        'bg-3': '#F5F5F5',
      }

      for (const key in colors) {
        if (this.colorText === key) {
          result = colors[key]
        }
      }

      return result
    },
    getFontSizeText(): string {
      return `${this.fontSizeText}px`
    }
  }
})
</script>

<style lang="scss">
@use './UiText.scss';
</style>
