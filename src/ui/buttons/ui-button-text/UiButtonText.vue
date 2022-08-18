<template>
  <button
    class="ui-button-text"
    :disabled="isDisabled"
    :class="{'decorate': isDecorate}"
    @click="emitClick"
  >
    <ui-text
      :contentText="contentButton"
      :fontSizeText="fontSizeButton"
      :typeText="typeText"
    />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { UiText, TFontType } from '@/ui'

export default Vue.extend({
  name: 'UiButtonText',
  components: { UiText },
  props: {
    contentButton: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    fontSizeButton: {
      type: Number,
      required: false,
      default: 18
    },
    typeText: {
      type: String as PropType<TFontType>,
      required: false,
      default: 'regular'
    },
    isDecorate: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    emitClick(): void {
      this.$emit('click')
    }
  },
  computed: {
    getFontSizeButton(): string {
      return `${this.fontSizeButton}px`
    }
  }
})
</script>

<style lang="scss">
@use './UiButtonText.scss';
</style>
