import { ref } from 'vue'
import type { Ref } from 'vue'
import { SetStateSetter } from '../types/index'

export default function useState<T>(init: T) {
  const _state = createState<T>(init);
  const _setState = createStateSetter<T>(_state);
  return [_state, _setState] as [Ref<T>, SetStateSetter<T | Function>]
}

function createState<T>(init: T) {
  return ref(init) as Ref<T>
}

function createStateSetter<T>(state: Ref<T>) {
  return function<U extends T | Function > (newState: U) {
    if (typeof newState === 'function') {
      state.value = newState(state)
    } else {
      state.value = newState as T
    }
  }
}