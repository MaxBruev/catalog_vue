<template>
  <section class="catalog-main">
    <div class="catalog-main__section-1">
      <filters :EX_FilterProducts="EX_FilterProducts" @isSetFilters="checkIsSetFilters" />
    </div>
    <div v-if="!getCatalogProducts.length" class="empty-catalog">
      <ui-text
        :colorText="'text-1'"
        :contentText="`Empty`"
        :fontSizeText="16"
        :typeText="'medium'"
      />
    </div>
    <div v-else class="catalog-main__section-2">
      <div v-if="indexProductBestSale && !isSetFilters" class="block-sale">
        <ui-header
          :typeHeader="'h1'"
          :colorHeader="'text-1'"
          :contentHeader="getTextSale"
          :fontSizeHeader="40"
        />
      </div>
      <card-product
        v-for="(item, index) in getCatalogProducts"
        :key="index"
        :productInfo="item"
        :isBestSale="indexProductBestSale === index && !isSetFilters"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

import { Filters, CardProduct } from '@/components/pages'
import { UiHeader } from '@/ui'

import { IProduct } from '@/services'
import { $FilterProducts } from '@/classes'
import UiText from '@/ui/texts/ui-text/UiText.vue'

interface IProductWithBestSale {
  product: IProduct
  index: number
}

export default Vue.extend({
  name: 'Catalog',
  components: { UiText, UiHeader, CardProduct, Filters },
  data() {
    return {
      isSetFilters: false,
      EX_FilterProducts: new $FilterProducts([]),
      indexProductBestSale: null,
      bestSale: ''
    }
  },
  methods: {
    ...mapActions('catalog', ['ALoadListProducts']),

    getProductWithBestSale(list: Array<IProduct>): IProductWithBestSale {
      const newList: Array<IProduct> = list.map((item) => {
        const product = item
        if (!product.sale) product.sale = 0
        return product
      })

      const indexProduct = newList.reduce((pevItem, curItem, index) => newList[pevItem].sale > curItem.sale ? pevItem : index, 0)
      this.indexProductBestSale = 2
      this.bestSale = list[indexProduct].sale

      return {
        product: list[indexProduct],
        index: indexProduct
      }
    },
    checkIsSetFilters(status: boolean): void {
      this.isSetFilters = status
    }
  },
  computed: {
    ...mapState('catalog', ['listProducts']),

    /**
     * @method getCatalogProducts - Метод для выдачи преобразованного списка продуктов
     * @description Данный метод нобходим, чтобы переместить товар с самой высокой скидкой на 3 позицию (если вообще есть товары со скидкой)
     * @return {Array<IProduct>}
     */
    getCatalogProducts(): Array<IProduct> {
      const result: Array<IProduct> = this.EX_FilterProducts.getListProducts()
      const isHaveSales = this.EX_FilterProducts.getListProducts().some((item) => !!item.sale)

      if (isHaveSales && !this.isSetFilters) {
        const productWithBestSale = this.getProductWithBestSale(result)

        if (productWithBestSale.index !== 2) {
          const copyItem = result[2]

          result.splice(productWithBestSale.index, 1)
          result[2] = productWithBestSale.product
          result.push(copyItem)
        }
      }

      return result
    },
    getTextSale(): string {
      return `Bestsellers:</br>${this.bestSale}`
    },
  },
  created() {
    this.ALoadListProducts().then(() => {
      this.EX_FilterProducts = new $FilterProducts(this.listProducts)
    })
  }
})
</script>

<style lang="scss">
@use './Catalog.scss';
</style>
