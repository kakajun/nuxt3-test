<template>
  <div>
    <h1>Index Page2</h1>
    <div>
      {{ foo }}
    </div>
    <div></div>
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
  </div>
</template>
<script setup>
layout: "default";
const foo = useFoo();
</script>
<style>
@import "element-plus/dist/index.css";
</style>
