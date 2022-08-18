import { $HttpClient } from '@/classes'
import { IProduct } from '@/services'
import { AxiosResponse } from 'axios'

/**
 * @method loadListProducts - Метод для загрузки списка продуктов
 * @return {Promise<AxiosResponse<Array<IProduct>, any>>}
 */
export const loadListProducts = (): Promise<AxiosResponse<Array<IProduct>, any>> =>
  $HttpClient.get(`http://localhost:3001/data`)
