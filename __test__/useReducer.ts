import { expect, test } from 'vitest'
import type { Ref } from 'vue'
import type { ReturnDisptch } from '../libs/types'

import { useReducer } from '../libs/main'

function reducer(state, action) {
  if (action.type === 'add')
    return state.value + 1

  return state.value - 1
}
test('useReducer', () => {
  const [state, dispatch] = useReducer<number>(reducer, 1)
  expect((state as Ref<number>).value).toBe(1);
  (dispatch as ReturnDisptch) ({ type: 'add' })
  expect((state as Ref<number>).value).toBe(2)
})

test('useReducer has init ', () => {
  const init = (arg: number) => {
    return arg + 1
  }
  const [state, dispatch] = useReducer<number>(reducer, 1, init)
  expect((state as Ref<number>).value).toBe(2);
  (dispatch as ReturnDisptch) ({ type: 'add' })
  expect((state as Ref<number>).value).toBe(3)
})
