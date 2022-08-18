import { MutationType } from '@/store/mutations'

export default {
  ASetBlur({ commit }, status: boolean): void {
    commit(MutationType.SET_BLUR, status)
  }
}
