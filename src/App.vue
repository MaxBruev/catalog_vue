<template>
  <component
    :is="$route.meta.layout"
    id="app"
  >
    <router-view />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

import { MConfigurations } from '@/mixins'

export default Vue.extend({
  name: 'App',
  mixins: [MConfigurations]
});
</script>

<style lang="scss">
@use 'src/assets/styles/index.scss';
</style>
