<template>
  <button
    class="ui-button"
    :disabled="isDisabled"
    @click="emitClick"
  >
    <span v-html="contentButton" class="ui-button__content" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiButton',
  props: {
    contentButton: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    emitClick(): void {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss">
@use './UiButton.scss';
</style>
