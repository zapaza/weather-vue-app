<template>
  <div class="date-container">
    <h2 class="date-dayname">{{ dayName }}</h2>
    <span class="date-day">{{ fullDate }}</span>
    <i class="location-icon" data-feather="map-pin"></i>
    <span class="location">{{ cityName }}, {{ countryName }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import { getDate } from '@/code/helpers/date';

export default defineComponent({
  name: 'CDateContainer',
  props: {
    cityName: {
      type: String,
    },
    countryName: {
      type: String,
    },
  },
  setup() {
    const dayName = getDate.currentDay();
    const fullDate = getDate.fullDate();

    return {
      dayName,
      fullDate,
    };
  },
});
</script>
