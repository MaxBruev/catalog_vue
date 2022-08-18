<template>
  <div class="ui-select">
    <label v-if="labelInput" class="ui-select__label">
      <span v-html="labelInput" />
    </label>
    <div class="ui-select__container">
      <button
        class="ui-select__container_selected"
        @click="showList"
      >
        <span v-html="getSelected" />
        <div
          class="icon-block"
          :class="{'rotate-arrow': isShowList}"
        >
          <ui-icon
            :nameIcon="'arrow'"
            :sizeIcon="10"
          />
        </div>
      </button>
      <div v-if="isShowList" class="ui-select__container_list">
        <button
          v-for="(item, index) in listSelect"
          :key="index"
          class="item-select"
          @click="setSelected(index)"
        >
          <span v-html="item.title" class="item-select__item" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import UiIcon from '@/ui/icons/ui-icon/UiIcon.vue'

import { ISelected } from '@/ui'

export default Vue.extend({
  name: 'UiSelect',
  components: { UiIcon },
  props: {
    indexSelected: {
      type: Number,
      required: true
    },
    listSelect: {
      type: Array as PropType<Array<ISelected>>,
      required: true
    },
    labelInput: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      isShowList: false
    }
  },
  methods: {
    setSelected(index: number): void {
      this.isShowList = false

      const selected:ISelected = this.listSelect[index]

      this.$emit('setSelected', selected)
    },
    showList(): void {
      this.isShowList = !this.isShowList
    }
  },
  computed: {
    getSelected(): string {
      return this.listSelect[this.indexSelected].title
    }
  }
})
</script>

<style lang="scss">
@use './UiSelect.scss';
</style>
