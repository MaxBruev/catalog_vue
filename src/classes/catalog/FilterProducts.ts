import $Catalog from '@/classes/catalog/Catalog'
import { IProduct } from '@/services'
import { TCategory, TPrice, IDataFilterProducts } from '@/types'

interface IFilterProducts {
  filterProducts(dataFilters: IDataFilterProducts): void
}

/**
 * @class $FilterProducts - Класс фильрации
 * @description Имеет методы:
 * ПУБЛИЧНЫЙ - фильтрации по 3 показателям
 * ПРИВАТНЫЕ - методы фильтрации продуктов(по совпадению символов, категории и цене(по возрастани или убыванию)
 *
 * @extends $Catalog
 * @implements IFilterProducts
 */
export default class $FilterProducts extends $Catalog implements IFilterProducts{
  private readonly oldListProducts: Array<IProduct> = []

  constructor(listProducts: Array<IProduct>) {
    super(listProducts)

    this.oldListProducts = this.getListProducts()
  }

  public filterProducts(dataFilters: IDataFilterProducts): void {
    const copyList = this.oldListProducts

    this.searchProduct(dataFilters.search, copyList)
      .then((res: Array<IProduct>) => {
        return this.filterCategory(dataFilters.category, res)
      })
      .then((res: Array<IProduct>) => {
        return this.filterPrice(dataFilters.price, res)
      })
      .then((res: Array<IProduct>) => {
        this.updateListProducts(res)
      })
  }

  private searchProduct(value: string, currentListProduct: Array<IProduct>): Promise<Array<IProduct>> {
    return new Promise((resolve) => {
      const currentList = currentListProduct
      let result = []

      if (value) {
        result = currentList.filter((item) => {
          return item.name.toLowerCase().includes(value)
        })

        resolve(result)
      } else {
        resolve(currentList)
      }
    })
  }

  private filterCategory(category: TCategory, currentListProduct: Array<IProduct>): Promise<Array<IProduct>> {
    return new Promise((resolve) => {
      const currentList = currentListProduct
      let result = []

      if (category) {
        result = currentList.filter((item) => item.category === category)

        resolve(result)
      } else {
        resolve(currentList)
      }
    })
  }

  private filterPrice(price: TPrice, currentListProduct: Array<IProduct>): Promise<Array<IProduct>> {
    const currentList = currentListProduct
    let result = []

    return new Promise((resolve) => {
      if (price) {
        if (price === 'high') {
          result = currentList.sort((a, b) => +a.price - +b.price)
        }
        if (price === 'low') {
          result = currentList.sort((a, b) => +b.price - +a.price)
        }

        resolve(result)
      } else {
        resolve(currentList)
      }
    })
  }
}
