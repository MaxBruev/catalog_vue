import { IAny } from '@/types'
import { IProduct } from '@/services'

export const MutationType = {
  SET_LIST_PRODUCTS: 'SET_LIST_PRODUCTS'
}

export default {
  [MutationType.SET_LIST_PRODUCTS](state: IAny, listProducts: Array<IProduct>): void {
    state.listProducts = listProducts
  }
}
