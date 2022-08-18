import { IAny } from '@/types'

export const MutationType = {
  SET_BLUR: 'SET_BLUR'
}

export default {
  [MutationType.SET_BLUR](state: IAny, status: boolean): void {
    state.isBloor = status
  }
}
