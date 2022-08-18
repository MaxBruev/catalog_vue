import axios, {AxiosResponse, AxiosStatic} from "axios";

interface IHttpClient {
  get(resource: string, params?: object) // отправить get-запрос
  post(resource: string, data?: object, params?: object) // отправить post-запрос
}

/**
 * @class $HttpClient - Класс Http запроса
 * @description Имеет методы: GET и POST
 * @implements IHttpClient
 */
class $HttpClient implements IHttpClient{
  private readonly axios: AxiosStatic

  constructor() {
    this.axios = axios
  }

  public async get(resource: string, params?: object): Promise<AxiosResponse<any, any>> {
    return await this.axios.get(resource, { params })
  }

  public async post(resource: string, data?: object, params?: object): Promise<AxiosResponse<any, any>> {
    return await this.axios.post(resource, data, { params })
  }
}

export default new $HttpClient()
