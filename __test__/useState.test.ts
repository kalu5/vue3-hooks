import type { Ref } from 'vue'
import { expect, test } from 'vitest'
import { useState } from '../libs/main'

test('useState number', () => {
  const [count, setCount]  = useState<number>(0)
  expect((count as Ref<number> ).value).toBe(0);
  setCount(1)
  expect((count as Ref<number> ).value).toBe(1)
  setCount((val: Ref<number>) => {
    return val.value + 2
  })
  expect((count as Ref<number> ).value).toBe(3)
})

test('useState string', () => {
  const [count, setCount]  = useState<string>('')
  expect((count as Ref<string> ).value).toBe('');
  setCount('hello hooks ')
  expect((count as Ref<string> ).value).toBe('hello hooks ')
  setCount((val: Ref<string>) => {
    return val.value + '!'
  })
  expect((count as Ref<string> ).value).toBe('hello hooks !')
})

test('useState boolean', () => {
  const [count, setCount]  = useState<boolean>(false)
  expect((count as Ref<boolean> ).value).toBe(false);
  setCount(true)
  expect((count as Ref<boolean> ).value).toBe(true)
  setCount((val: Ref<boolean>) => {
    return !val.value
  })
  expect((count as Ref<boolean> ).value).toBe(false)
})

test('useState object', () => {
  interface People {
    name: string;
    age: number;
  }

  type State = People | null
  const [count, setCount]  = useState<State>(null)
  expect((count as Ref<State> ).value).toBeNull();
  setCount({
    name: 'test Obj',
    age: 1
  })
  expect((count as Ref<State> ).value).toStrictEqual({
    name: 'test Obj',
    age: 1
  })
  setCount((val: Ref<State>) => {
    return {...val.value, name: 'test'}
  })
  expect((count as Ref<State> ).value).toStrictEqual({
    name: 'test',
    age: 1
  })
})

test('useState array', () => {
  interface People {
    name: string;
    age: number;
  }

  type State = People[]
  const [count, setCount]  = useState<State>([])
  expect((count as Ref<State> ).value).toStrictEqual([]);
  setCount([{
    name: 'test Obj',
    age: 1
  }])
  expect((count as Ref<State> ).value).toStrictEqual([{
    name: 'test Obj',
    age: 1
  }])
  setCount((val: Ref<State>) => {
    return [...val.value, {name: 'new test', age: 2}]
  })
  expect((count as Ref<State> ).value).toStrictEqual([{
    name: 'test Obj',
    age: 1
  }, {
    name: 'new test',
    age: 2
  }])
})