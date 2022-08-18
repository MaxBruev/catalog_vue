import { IProduct, loadListProducts } from '@/services'
import { MutationType } from '@/store/modules/catalog/mutations'

export default {
  ALoadListProducts({ commit }): Promise<void> {
   return loadListProducts().then((res) => {
      const responseData: Array<IProduct> = res.data as Array<IProduct>
      commit(MutationType.SET_LIST_PRODUCTS, responseData)
    })
  }
}
