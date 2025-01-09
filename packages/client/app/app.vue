<script setup lang="ts">
import { treaty } from '@elysiajs/eden';
import type { Server } from '../../server/src/index'

const client = treaty<Server>('localhost:3000/api/server')

const result = ref(0)

onMounted(() => {
  const liveRng = client.rng.subscribe()

  liveRng.subscribe((message) => {
    result.value = message.data.randomNumber
  })
})
</script>

<template>
  <div>
    Hello Nuxt

    <div>
      <pre v-text="result"></pre>
    </div>
  </div>
</template>
