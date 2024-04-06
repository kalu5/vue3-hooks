<h1>
  Vue3 hooks utils .
</h1>

<p>
  This is vue3 hooks utils . You can use it just like react .
</p>

# Use

``` bash
pnpm i @kalu5/vue_hooks
```

## useState

eg:
``` vue
<script setup lang="ts">
import { useState } from '@kalu5/vue_hooks'
const [state, setState] = useState(0)
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
