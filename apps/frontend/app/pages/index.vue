<script setup lang="ts">
const { rng } = useBackend()

const randomNumber = ref(0)

onMounted(async () => {
  const liveRng = await rng.subscribe()

  liveRng.subscribe((event) => {
    randomNumber.value = event.data.randomNumber
  })
})
</script>

<template>
  <div>
    Random number generated on the server: {{ randomNumber }}
  </div>
</template>
