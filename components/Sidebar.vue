<template>
  <aside class="sidebar">
    <h1>
      <span>N</span>uxt3 <span>T</span>est<sup
        ><small>{{ $config.nitroVersion }}</small></sup
      >
    </h1>
    <div class="perf">
      <template v-if="ssr">
        <h3>✔️ Server Side Rendered</h3>
        <p>🕒 {{ new Date() }}</p>
        <h3>🚀 Metrics</h3>
        <p v-for="(metric, index) in state.metrics" :key="index">
          {{ metric.name }}:
          <b>{{ metric.duration }} ms</b>
        </p>
      </template>
      <template v-else>
        <h3>⚠️ Client Side Rendered</h3>
        <a href="" class="white-button" @click="reload">Reload</a>
      </template>
    </div>
    <div class="hostings">
      <h4>This demo is deployed on:</h4>
      <ui-button href="https://nitro-demo.vercel.app" rel="noreferrer">
        Vercel
      </ui-button>
      <ui-button href="https://nitro-demo.netlify.app" rel="noreferrer">
        Netlify
      </ui-button>
      <ui-button href="https://nitro-demo.nuxt.workers.dev" rel="noreferrer">
        Cloudflare
      </ui-button>
      <ui-button href="https://nuxt.github.io/nitro-demo">
        GH Pages (SW)
      </ui-button>
      <ui-button href="https://nuxt-sigma.azurewebsites.net" rel="noreferrer">
        Azure Functions
      </ui-button>
      <ui-button href="https://nitro-azure-demo.nuxtjs.org" rel="noreferrer">
        Azure SWA
      </ui-button>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import uiButton from "../pages/Button.vue";
let ssr = ref(true);
onMounted(() => {
  ssr.value = process.server || window.__NUXT__.serverRendered;

  console.log(
    process.server || window.__NUXT__.serverRendered,
    " process.server || window.__NUXT__.serverRendered"
  );
});

const state = reactive({ metrics: [] });
const nav = globalThis.performance.getEntriesByType("navigation")[0];
// console.log(globalThis.performance.getEntriesByType("navigation"), "8888");
// console.log(globalThis.performance.getEntriesByType, "555");
if (nav) {
  for (const entry of nav.serverTiming || []) {
    state.metrics.push({
      name: decodeURIComponent(entry.description || entry.name),
      duration: entry.duration,
    });
  }
  state.metrics.push({
    name: "TTFB (client)",
    duration: nav.responseStart,
  });
}

const reload = () => {
  window.location.reload();
};
</script>
<style>
.sidebar {
  color: #efefe6;
  width: 320px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #003c3c;
}

.sidebar h1 {
  margin: 12px 0;
}

.sidebar h1 span {
  color: #00dc82;
}

.sidebar h3 {
  color: #efefe6;
  margin: 0;
  margin-bottom: 8px;
  padding-top: 4px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #efefe6;
}

.hostings a {
  margin-bottom: 12px;
}

.perf {
  font-family: monospace;
  padding: 20px 16px;
  color: #00dc82;
  background-color: #032a2a;
  border-radius: 8px;
}
.perf p {
  margin: 0;
  padding-top: 8px;
  padding-bottom: 4px;
}

.white-button {
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 24px;
  text-decoration: none;
  margin-top: 16px;
  display: inline-block;
}

.white-button:hover {
  color: #00dc82;
  border-color: #00dc82;
}
</style>
