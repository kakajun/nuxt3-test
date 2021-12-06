<template>
  <div>
    <h1>Index Page2</h1>
    <!-- <NuxtLayout name="default">
      <template #header> Some header template content. </template>

      The rest of the page
    </NuxtLayout> -->
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
      <NuxtLink to="/Vue3SketchRuler">尺规组件</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/uitest">UI组件库测试</NuxtLink>
    </div>
    <InputEntry />
    <!-- <NuxtLink to="/vueUse">vueUse Page</NuxtLink> -->
  </div>
</template>
<script setup>
layout: "default";
// const { $hello } = useNuxtApp();
const foo = useFoo();
</script>
