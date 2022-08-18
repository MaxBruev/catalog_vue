<template>
  <div class="filters-component">
    <ui-input
      :labelInput="'Search'"
      :optionsInput="getOptionsInput"
      :valueInput="inputValue"
      @clearInput="clearInput"
      @input="setValueInput"
    />
    <ui-select
      :labelInput="'Product category'"
      :indexSelected="indexSelectedCategory"
      :listSelect="getListCategory"
      @setSelected="setSelectedCategory"
    />
    <ui-select
      :labelInput="'Price'"
      :indexSelected="indexSelectedPrice"
      :listSelect="getListPrice"
      @setSelected="setSelectedPrice"
    />
    <ui-button
      :contentButton="'Apply'"
      @click="applyButton"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { UiInput, UiSelect, UiButton, IOptionsInput, ISelected } from '@/ui'
import { $FilterProducts } from '@/classes'
import { IDataFilterProducts } from '@/types'

export default Vue.extend({
  name: 'Filters',
  components: { UiButton, UiSelect, UiInput },
  props: {
    EX_FilterProducts: {
      type: $FilterProducts as PropType<$FilterProducts>,
      required: true
    }
  },
  data() {
    return {
      inputValue: '',

      indexSelectedCategory: 0,
      selectedValueCategory: '',

      indexSelectedPrice: 0,
      selectedValuePrice: ''
    }
  },
  methods: {
    clearInput(): void {
      this.inputValue = ''
    },
    setValueInput(value: string): void {
      this.inputValue = value
    },
    setSelectedCategory(selected: ISelected): void {
      this.indexSelectedCategory = selected.index
      this.selectedValueCategory = selected.value
    },
    setSelectedPrice(selected: ISelected): void {
      this.indexSelectedPrice = selected.index
      this.selectedValuePrice = selected.value
    },
    applyButton(): void {
      const dataFilterProducts:IDataFilterProducts = {
        search: this.inputValue,
        category: this.selectedValueCategory,
        price: this.selectedValuePrice
      }

      this.EX_FilterProducts.filterProducts(dataFilterProducts)

      const isSetFilters = !!this.inputValue || !!this.indexSelectedPrice || !!this.indexSelectedCategory

      this.$emit('isSetFilters', isSetFilters)
    }
  },
  computed: {
    getOptionsInput(): IOptionsInput {
      return {
        placeholder: 'Search'
      }
    },
    getListCategory(): Array<ISelected>{
      return [
        {
          index: 0,
          title: 'All',
          value: ''
        },
        {
          index: 1,
          title: 'Sneakers',
          value: 'sneakers'
        },
        {
          index: 2,
          title: 'Hoodie',
          value: 'hoodie'
        }
      ]
    },
    getListPrice(): Array<ISelected>{
      return [
        {
          index: 0,
          title: 'All',
          value: ''
        },
        {
          index: 1,
          title: 'Ascending price',
          value: 'high'
        },
        {
          index: 2,
          title: 'By price reduction',
          value: 'low'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
@use './Filters.scss';
</style>
