<template>
  <div class="today-info">
    <div class="precipitation">
      <span class="title">{{ $t('precipitation') }}</span>
      <span class="value">{{ precipitation }} %</span>
      <div class="clear"></div>
    </div>
    <div class="humidity">
      <span class="title">{{ $t('humidity') }}</span>
      <span class="value">{{ humidity }} %</span>
      <div class="clear"></div>
    </div>
    <div class="wind">
      <span class="title">{{ $t('wind') }}</span>
      <span class="value">{{ wind }} {{ $t('speed') }}</span>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CTodayInfo',
  props: {
    precipitation: {
      type: String,
    },
    humidity: {
      type: String,
    },
    wind: {
      type: String,
    },
  },
});
</script>

<style scoped>

</style>
