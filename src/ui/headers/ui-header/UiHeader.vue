<template>
  <div
    class="ui-header"
    :style="{
      '--color-header': getColorHeader,
      '--font-size-header': getFontSizeHeader
    }"
  >
    <h1 v-if="typeHeader === 'h1'" v-html="contentHeader" />
    <h2 v-if="typeHeader === 'h2'" v-html="contentHeader" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { THeaderTypes, TColorTypes } from '@/ui';

export default Vue.extend({
  name: 'UiHeader',
  props: {
    fontSizeHeader: {
      type: Number,
      required: true
    },
    typeHeader: {
      type: String as PropType<THeaderTypes>,
      required: true
    },
    contentHeader: {
      type: String,
      required: true
    },
    colorHeader: {
      type: String as PropType<TColorTypes>,
      required: false,
      default: 'text-1'
    }
  },
  computed: {
    getColorHeader(): string {
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
        if (this.colorHeader === key) {
          result = colors[key]
        }
      }

      return result
    },
    getFontSizeHeader(): string {
      return `${this.fontSizeHeader}px`
    }
  }
});
</script>

<style lang="scss">
@use 'UiHeader.scss';
</style>
