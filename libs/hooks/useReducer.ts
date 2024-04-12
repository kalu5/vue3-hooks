import type { Ref } from 'vue'
import type { Action, Init, Reducer, ReturnDisptch, SetStateSetter } from '../types/index'
import { isFunc } from '../utils/index'
import useState from './useState'

export default function useReducer<U>(reducer: Reducer<U>, initArg: U, init?: Init<U>) {
  let lastInit: U = initArg
  if (init && isFunc(init))
    lastInit = init(lastInit)

  const [_state, setState] = useState<U>(lastInit)

  const _dispatch = createDispatch<U>(reducer, _state, setState)

  return [_state, _dispatch]
}

function createDispatch<T>(reducer: Reducer<T>, _state: Ref<T>, setState: SetStateSetter<T>): ReturnDisptch {
  return function (action: Action) {
    setState (reducer (_state, action))
  }
}
