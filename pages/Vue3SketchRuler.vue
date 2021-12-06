<template>
  <SketchRule
    :thick="thick"
    :scale="scale"
    :width="582"
    :height="482"
    :startX="startX"
    :startY="startY"
    :lines="lines"
  />
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { SketchRule } from "vue3-sketch-ruler";
import "vue3-sketch-ruler/lib/style.css";
const state = reactive({
  scale: 2, //658813476562495, //1,
  startX: 0,
  startY: 0,
  lines: {
    h: [100, 200],
    v: [100, 200],
  },
  thick: 20,
});
const { scale, startX, startY, lines, thick } = toRefs(state);
</script>
