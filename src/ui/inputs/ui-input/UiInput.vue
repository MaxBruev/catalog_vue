<template>
  <div class="ui-input">
    <label v-if="labelInput" class="ui-input__label">
      <span v-html="labelInput" />
    </label>
    <div class="ui-input__input">
      <input
        :value="valueInput"
        :type="optionsInput.type"
        :maxlength="optionsInput.maxLength"
        :placeholder="optionsInput.placeholder"
        :readonly="optionsInput.readonly"
        @keydown="emitEvent('keydown', $event)"
        @keypress="emitEvent('keypress', $event)"
        @keyup="emitEvent('keyup', $event)"
        @blur="emitEvent('blur', $event)"
        @focus="emitEvent('focus', $event)"
        @change="emitEvent('change', $event)"
        @input="emitEvent('input', $event)"
        @keyup.enter="emitEvent('enter', $event)"
      >
      <button class="ui-input__input_icon-block" @click="clearInput">
        <ui-icon :nameIcon="'cross'" :sizeIcon="10" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { IOptionsInput } from '@/ui'
import UiIcon from '@/ui/icons/ui-icon/UiIcon.vue'

export default Vue.extend({
  name: 'UiInput',
  components: { UiIcon },
  props: {
    labelInput: {
      type: String,
      required: false,
      default: ''
    },
    valueInput: {
      type: String || Number,
      required: true
    },
    optionsInput: {
      type: Object as PropType<IOptionsInput>,
      required: false,
      default() {
        return {
          type: 'text',
          maxLength: 256,
          placeholder: '',
          readonly: false
        }
      }
    }
  },
  methods: {
    emitEvent(eventName: string, event): void {
      let value = event.target.value.replace(/^\s+|\s+$/g, '');
      if (value.length > this.optionsInput.maxLength) {
        value = value.slice(0, this.optionsInput.maxLength);
      }
      this.$emit(eventName, value, event);
    },
    clearInput(): void {
      this.$emit('clearInput')
    }
  }
})
</script>

<style lang="scss">
@use './UiInput.scss';
</style>
м
