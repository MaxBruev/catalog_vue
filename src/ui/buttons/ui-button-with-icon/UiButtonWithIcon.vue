<template>
  <button
    class="ui-button-with-icon"
    :class="{'active': isActive}"
    :disabled="isDisabled"
    @click="emitClick"
  >
    <span v-html="contentButton" class="ui-button-with-icon__content" />
    <div class="ui-button-with-icon__icon-block">
      <ui-icon :nameIcon="getIcon" :sizeIcon="16" />
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import UiIcon from '@/ui/icons/ui-icon/UiIcon.vue'

import { TIconTypes } from '@/ui'

export default Vue.extend({
  name: 'UiButtonWithIcon',
  components: { UiIcon },
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
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    iconButton: {
      type: String as PropType<TIconTypes>,
      required: false,
      default: 'plus'
    },
    iconButtonActive: {
      type: String as PropType<TIconTypes>,
      required: false,
      default: 'plus'
    }
  },
  methods: {
    emitClick(): void {
      this.$emit('click')
    }
  },
  computed: {
    getIcon(): TIconTypes {
      return this.isActive ? this.iconButtonActive : this.iconButton
    }
  }
})
</script>

<style lang="scss">
@use './UiButtonWithIcon.scss';
</style>
