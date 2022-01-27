<script setup lang="ts">
const { count, inc, dec } = useCount();
</script>

<template>
  <div inline-flex m="y-3">
    <button class="btn" @click="dec()">-</button>
    <div font="mono" w="15" m-auto inline-block>
      {{ count }}
    </div>
    <button class="btn" @click="inc()">+</button>
  </div>
</template>
<style scoped>
.btn {
  width: 30px;
  height: 20px;
}
</style>
