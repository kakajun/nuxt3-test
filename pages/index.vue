<template>
  <div>
    <h1>Index Page</h1>
    <div>
      {{ foo }}
    </div>
    <NuxtLink to="/detail">Detail Page</NuxtLink>
    <NuxtLink to="/vueUse">vueUse Page</NuxtLink>
  </div>
</template>
<script setup>
const foo = useFoo();
</script>
