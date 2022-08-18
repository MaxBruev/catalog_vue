import { IProduct } from '@/services'

interface IBasket {
  addProductBasket(product: IProduct): void
  deleteProductBasket(id: number): void
  getListProductsBasket(): Array<IProduct>
  getIsItemProductBasket(id: number): boolean
  getSubtotalPrice(): number
  getSale(): number
  getSumPrice(): number
}

/**
 * @class $Basket - Класс корзины
 * @description Имеет методы: добавить, удалить(один/все), выдать список корзины, выдать информацию по цене и скидкам
 * @implements IBasket
 */
class $Basket implements IBasket {
  private listProductBasket: Array<IProduct> = []

  constructor() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('listProductsBaskets'));

    this.listProductBasket = dataLocalStorage !== null ? dataLocalStorage : []
  }

  public addProductBasket(product: IProduct): void {
    this.listProductBasket.push(product)
    this.setInLocalStorage(this.listProductBasket)
  }

  public deleteProductBasket(id: number): void {
    this.listProductBasket.forEach((item: IProduct, index: number) => {
      if (item.id === id) {
        this.listProductBasket.splice(index, 1)
        this.setInLocalStorage(this.listProductBasket)
      }
    })
  }

  public deleteAllProductBasket(): void {
    this.listProductBasket = []
    this.setInLocalStorage(this.listProductBasket)
  }

  public getListProductsBasket(): Array<IProduct> {
    return this.listProductBasket
  }

  public getIsItemProductBasket(id: number): boolean {
    const result = this.listProductBasket.filter((item) => item.id === id)
    return !!result.length
  }

  public getSubtotalPrice(): number {
    let sum = 0

    this.listProductBasket.forEach((item: IProduct) => {
      sum += +item.price
    })

    return Math.trunc(sum * 100) / 100
  }

  public getSale(): number {
    let sum = 0

    this.listProductBasket.forEach((item: IProduct) => {
      sum += +item.price * (+item.sale/100)
    })

    return Math.trunc(sum * 100) / 100
  }

  public getSumPrice(): number {
    return Math.trunc((this.getSubtotalPrice() - this.getSale()) * 100) / 100
  }

  private setInLocalStorage(listProducts: Array<IProduct>): void {
    localStorage.setItem('listProductsBaskets', JSON.stringify(listProducts));
  }
}

export default new $Basket()
