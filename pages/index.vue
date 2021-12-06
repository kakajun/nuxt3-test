<template>
  <div>
    <h1>Index Page2</h1>

    <div>
      {{ foo }}
    </div>
    <div>
      <!-- {{ $hello() }} -->
    </div>
    <NuxtLink to="/detail">Detail Page</NuxtLink>
    <div>
      <NuxtLink to="/vueUse">vueUse Page</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/uitest">UI组件库测试</NuxtLink>
    </div>
    <InputEntry />
    <!-- <NuxtLink to="/vueUse">vueUse Page</NuxtLink> -->
  </div>
</template>
<script setup>
// const { $hello } = useNuxtApp();
const foo = useFoo();
</script>
