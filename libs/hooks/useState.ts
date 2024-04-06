import { ref } from 'vue'
import type { Ref } from 'vue'
import type { SetStateSetter } from '../types/index'
import { isFunc } from '../utils/index'

export default function useState<T>(init: T) {
  const _state = createState<T>(init)
  const _setState = createStateSetter<T>(_state)
  return [_state, _setState] as [Ref<T>, SetStateSetter<T | Function>]
}

function createState<T>(init: T) {
  return ref(init) as Ref<T>
}

function createStateSetter<T>(state: Ref<T>) {
  return function<U extends T | Function > (newState: U) {
    state.value = isFunc<U>(newState) ? (newState as unknown as Function)(state) : newState as T
  }
}
