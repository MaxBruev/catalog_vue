<template>
  <div class="manu-block" :class="{'open-basket': isShowBasket}">
    <div class="manu-block__content">
      <ui-button-text :contentButton="'Profile'" />
      <ui-button-text :contentButton="getContentButtonBasket" @click="showBasket" />
    </div>

    <div
      v-if="isShowBasket"
      v-click-outside="clickOutside"
      class="basket-block"
    >
      <div class="basket-block__total">
        <ui-header
          :typeHeader="'h2'"
          :colorHeader="'text-1'"
          :contentHeader="'TOTAL'"
          :fontSizeHeader="24"
        />
        <div
          v-for="(item, index) in getInfoTotal"
          :key="index"
          class="info-total"
        >
          <ui-text
            :colorText="'text-1'"
            :contentText="item.title"
            :fontSizeText="16"
            :typeText="'regular'"
          />
          <ui-text
            v-if="!item.isRemove"
            :colorText="'text-1'"
            :contentText="item.content"
            :fontSizeText="16"
            :typeText="'medium'"
          />
          <ui-button-text
            v-else
            :contentButton="item.content"
            :fontSizeButton="16"
            :typeText="'medium'"
            isDecorate
            @click="removeAll"
          />
        </div>
      </div>
      <div class="basket-block__order">
        <ui-text
          :colorText="'text-1'"
          :contentText="'Order Total:'"
          :fontSizeText="20"
          :typeText="'medium'"
        />
        <ui-text
          :colorText="'text-1'"
          :contentText="getOrderTotal"
          :fontSizeText="20"
          :typeText="'medium'"
        />
      </div>
      <div class="basket-block__products">
        <div v-if="!getProductList.length" class="empty-basket">
          <ui-text
            :colorText="'text-1'"
            :contentText="`Empty`"
            :fontSizeText="16"
            :typeText="'medium'"
          />
        </div>
        <div
          v-else
          v-for="(item, index) in getProductList"
          :key="index"
          class="products-item"
        >
          <div class="products-item__img">
            <img :src="getImgProduct(item.imgUrl)" alt="product">
          </div>
          <div class="products-item__info">
            <div class="products-item__info_text">
              <ui-text
                :colorText="'text-4'"
                :contentText="item.name"
                :fontSizeText="16"
                :typeText="'regular'"
              />
              <ui-text
                :colorText="'text-1'"
                :contentText="`$${item.price}`"
                :fontSizeText="16"
                :typeText="'medium'"
              />
            </div>
            <div class="products-item__info_button">
              <ui-button-text
                :contentButton="'Remove'"
                :fontSizeButton="16"
                isDecorate
                @click="removeItem(item.id)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="basket-block__checkout">
        <ui-button-with-icon
          :iconButton="'arrow-right'"
          :contentButton="'Checkout'"
          @click="checkoutButton"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import { UiButtonText, UiHeader, UiText, UiButtonWithIcon } from '@/ui'
import { IProduct } from '@/services'
import { $Basket } from '@/classes'

interface IInfoTotal {
  title: string
  content?: string,
  isRemove?: boolean
}

export default Vue.extend({
  name: 'AppMenu',
  components: { UiButtonWithIcon, UiText, UiHeader, UiButtonText },
  data() {
    return {
      EX_Basket: $Basket,
      isShowBasket: false
    }
  },
  methods: {
    ...mapActions(['ASetBlur']),

    showBasket(): void {
      this.isShowBasket = !this.isShowBasket
      this.ASetBlur(this.isShowBasket)
    },
    clickOutside(): void {
      this.isShowBasket = false
      this.ASetBlur(this.isShowBasket)
    },
    removeItem(id: number): void {
      this.EX_Basket.deleteProductBasket(id)
    },
    removeAll(): void {
      this.EX_Basket.deleteAllProductBasket()
    },
    checkoutButton(): void {
      console.log('go bye')
    },
    getImgProduct(url: string): string {
      return require(`@/assets/img/pages/catalog/${url}.png`)
    },
  },
  computed: {
    getContentButtonBasket(): string {
      const aboutProducts = this.EX_Basket.getListProductsBasket().length
      return `Basket(${aboutProducts})`
    },
    getInfoTotal(): Array<IInfoTotal> {
      return [
        {
          title: 'Subtotal:',
          content: `$${this.EX_Basket.getSubtotalPrice()}`
        },
        {
          title: 'Sale:',
          content: `$${this.EX_Basket.getSale()}`
        },
        {
          title: 'Content:',
          content: 'Remove all',
          isRemove: true
        }
      ]
    },
    getOrderTotal(): string {
      return `$${this.EX_Basket.getSumPrice()}`
    },
    getProductList(): Array<IProduct> {
      return this.EX_Basket.getListProductsBasket()
    }
  }
})
</script>

<style lang="scss">
@use './AppMenu.scss';
</style>
