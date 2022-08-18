<template>
  <div class="card-product-component" :class="{'best-sale': isBestSale}">
    <div class="card-product-component__img-block">
      <img :src="getImgProduct" alt="product">
    </div>
    <div class="card-product-component__info-block">
      <ui-text
        :colorText="'text-1'"
        :contentText="productInfo.name"
        :fontSizeText="16"
        :typeText="'regular'"
      />
      <div class="price-info" :class="{'with-sale': isSale}">
        <ui-text
          :colorText="'text-1'"
          :contentText="getPriceInfo"
          :fontSizeText="16"
          :typeText="'semi-bold'"
        />
        <ui-text
          v-if="isSale"
          class="old-price"
          :colorText="'text-2'"
          :contentText="getOldPriceInfo"
          :fontSizeText="16"
          :typeText="'medium'"
        />
      </div>
    </div>
    <div class="card-product-component__button-block">
      <ui-button-with-icon
        :contentButton="'Add to basket'"
        :isActive="getIsProductInBasket"
        :iconButton="'plus'"
        :iconButtonActive="'check-mark'"
        @click="addInBasket"
      />
    </div>

    <div v-if="isSale" class="sale-block">
      <ui-text
        :colorText="'text-3'"
        :contentText="getSalleInfo"
        :fontSizeText="16"
        :typeText="'medium'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { UiText, UiButtonWithIcon } from '@/ui'
import { IProduct } from '@/services'
import { $Basket } from '@/classes'

export default Vue.extend({
  name: 'CardProduct',
  components: { UiButtonWithIcon, UiText },
  props: {
    productInfo: {
      type: Object as PropType<IProduct>,
      required: true
    },
    isBestSale: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      EX_Basket: $Basket,
      isActiveButton: false
    }
  },
  methods: {
    addInBasket(): void {
      const idProduct = this.productInfo.id
      const currentProduct = this.productInfo

      if (this.getIsProductInBasket) {
        this.EX_Basket.deleteProductBasket(idProduct)
      } else {
        this.EX_Basket.addProductBasket(currentProduct)
      }
    }
  },
  computed: {
    getImgProduct(): string {
      return require(`@/assets/img/pages/catalog/${this.productInfo.imgUrl}.png`)
    },
    getPriceInfo(): string {
      return `$${this.productInfo.price}`
    },
    getOldPriceInfo(): string {
      const sizeSale = this.productInfo.price * (+this.productInfo.sale/100)
      const oldPrice = Math.trunc((+this.productInfo.price + sizeSale) * 100) / 100
      return `$${oldPrice}`
    },
    getSalleInfo(): string {
      return `Sale -${this.productInfo.sale}%`
    },
    getIsProductInBasket(): boolean {
      return this.EX_Basket.getIsItemProductBasket(this.productInfo.id)
    },
    isSale(): boolean {
      return !!this.productInfo.sale
    }
  }
})
</script>

<style lang="scss">
@use './CardProduct.scss';
</style>
