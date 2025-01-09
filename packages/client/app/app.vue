<script setup lang="ts">
import { treaty } from '@elysiajs/eden';
import type { Server } from '../../server/src/index'

const client = treaty<Server>('localhost:3000/api/server')

const { data: index } = await client.index.get()
</script>

<template>
  <div>
    Hello Nuxt

    <div>
      <pre v-text="index"></pre>
    </div>
  </div>
</template>
