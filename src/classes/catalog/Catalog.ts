import { IProduct } from '@/services'

interface ICatalog {
  getListProducts(): Array<IProduct>
  updateListProducts(newList: Array<IProduct>): void
}

/**
 * @class $Catalog - Класс каталога
 * @description Имеет методы: выдать список продуктов и обновить список продуктов
 * @implements ICatalog
 */
export default class $Catalog implements ICatalog {
  private listProducts: Array<IProduct> = []

  constructor(listProducts: Array<IProduct>) {
    this.listProducts = listProducts
  }

  public getListProducts(): Array<IProduct> {
    return this.listProducts
  }

  public updateListProducts(newList: Array<IProduct>): void {
    this.listProducts = newList
  }
}
