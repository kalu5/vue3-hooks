import type { ToRefs } from 'vue'
import { unref } from 'vue'
import { expect, it } from 'vitest'
import { useReactive } from '../libs/main'

it('useReactive obj', () => {
  const [state, stateRef] = useReactive({
    name: '',
    age: 0,
  })
  expect((state.name)).toBe('')
  const { setName, setAge } = stateRef as ToRefs<{
    name: string
    age: number
    setName: (newVal: any) => void
    setAge: (newVal: any) => void
  }>
  unref(setName)('test')
  expect(state.name).toBe('test')
  unref(setAge)(11)
  expect(state.age).toBe(11)
})

it('useReactive object array', () => {
  const [state, stateRef] = useReactive({
    name: [{ fist: 'k', last: 'l' }],
    age: ['1'],
  })
  expect((state.name)).toEqual([{ fist: 'k', last: 'l' }])
  const { setName, setAge } = stateRef as ToRefs<{
    name: { fist: string, last: string }[]
    age: string[]
    setName: (newVal: any) => void
    setAge: (newVal: any) => void
  }>
  unref(setName)([{ fist: 'kk', last: 'll' }])
  expect(state.name).toEqual([{ fist: 'kk', last: 'll' }])
  unref(setAge)(['122', '233'])
  expect(state.age).toEqual(['122', '233'])
})
