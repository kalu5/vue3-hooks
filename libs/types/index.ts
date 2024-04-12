import type { Ref } from 'vue'

export type SetStateSetter<U> = (newState: U) => void
export interface Action {
  type: string
}

export type Reducer<T> = (state: Ref<T>, action: Action) => T

export type Init<T> = (init: T) => T

export type ReturnDisptch = (action: Action) => void
