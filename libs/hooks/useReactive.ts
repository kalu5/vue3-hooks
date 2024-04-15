import { reactive, toRefs } from 'vue'
import { isFunc } from '../utils/index'

export default function useReactive<T extends Record<string, any> >(init: T) {
  const state = reactive<T>(init)
  Object.keys(init).forEach((key) => {
    state[`set${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = function <U> (newState: U) {
      state[key] = isFunc<U>(newState) ? (newState as unknown as Function)(state[key]) : newState
    }
  })
  return [
    state,
    toRefs(state),
  ]
}
