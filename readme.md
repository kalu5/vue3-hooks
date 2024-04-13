<h1>
  Vue3 hooks .
</h1>

[![npm package](https://img.shields.io/npm/v/@kalu5/vue3-hooks.svg)](https://www.npmjs.org/package/@kalu5/vue3-hooks)
[![npm download](https://img.shields.io/npm/dt/@kalu5/vue3-hooks.svg)](https://www.npmjs.org/package/@kalu5/vue3-hooks)
[![github license](https://img.shields.io/github/license/kalu5/vue3-hooks.svg)](https://github.com/kalu5/vue3-hooks/main/LICENSE)
[![github issues open](https://img.shields.io/github/issues/kalu5/vue3-hooks.svg)](https://github.com/kalu5/vue3-hooks/issues?q=is%3Aopen+is%3Aissue)
[![github issues closed](https://img.shields.io/github/issues-closed/kalu5/vue3-hooks.svg)](https://github.com/kalu5/vue3-hooks/issues?q=is%3Aissue+is%3Aclosed)
![github language top](https://img.shields.io/github/languages/top/kalu5/vue3-hooks.svg)
[![github stars](https://img.shields.io/github/stars/kalu5/vue3-hooks.svg?style=social&label=Stars)](https://github.com/kalu5/vue3-hooks)

[![NPM](https://nodei.co/npm/@kalu5/vue3-hooks.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@kalu5/vue3-hooks)

> Using vue3.x composition api in react-hooks style.

**Advantage:**

1. Semantics is better.
2. Logic is clearer.

I highly recommend using it.

# Use

``` bash
pnpm i @kalu5/vue3-hooks
```

## useState

The correct way to open State.

eg:
``` vue
<script setup lang="ts">
import { useState } from '@kalu5/vue3-hooks'
const [state, setState] = useState<number>(0)
</script>

<template>
  <h1>{{ state }}</h1>
  <button @click="setState((state) => state.value + 1)">
    Add
  </button>
  <button @click="setState((state) => state.value - 1)">
    Minus
  </button>
</template>
```

## useReducer

eg:
``` vue
<script setup lang="ts">
import { useReducer } from '@kalu5/vue3-hooks'
function reducer(state, action) {
  if (action.type === 'add')
    return state.value + 1
  return state.value - 1
}
const [state, dispatch] = useReducer<number>(reducer, 1)
const [newState, newDispatch] = useReducer<number>(reducer, 2, (init: number) => init * 3)
</script>

<template>
  <h1>{{ state }}</h1>
  <h2>{{ newState }}</h2>
  <button @click="dispatch({ type: 'add' })">
    Add
  </button>
  <button @click="dispatch({ type: 'minus' })">
    Minus
  </button>
</template>
```
