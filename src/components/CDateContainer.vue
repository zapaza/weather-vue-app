<template>
  <div class="date-container">
    <h2 class="date-dayname">{{ dayName }}</h2>
    <span class="date-day">{{ fullDate }}</span>
    <i class="location-icon" data-feather="map-pin"></i>
    <span class="location">{{ cityName }}, {{ countryName }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { getDate } from '@/code/helpers/date';
import { useStore } from 'vuex';
import { ENDPOINT } from '@/code/request/request';

export default defineComponent({
  name: 'CDateContainer',
  setup() {
    const store = useStore();
    const dayName = getDate.currentDay();
    const fullDate = getDate.fullDate();

    const lon = computed(() => store.getters.showLon);
    const lat = computed(() => store.getters.showLat);
    const urlRequest = computed(() => `${ENDPOINT.currentWeatherData}?lat=${lat.value}&lon=${lon.value}&appid=2f01b940bd0602117d74d88616da877d`);

    const getLocation = () => {
      store.dispatch('getLocation');
    };

    const getLocationNames = () => {
      store.dispatch('getLocationsNames', urlRequest.value);
    };

    const cityName = computed(() => store.getters.showCity);
    const countryName = computed(() => store.getters.showCountry);

    onMounted(() => {
      getLocation();
      getLocationNames();
    });

    return {
      dayName,
      fullDate,
      lon,
      lat,
      cityName,
      countryName,
    };
  },
});
</script>
