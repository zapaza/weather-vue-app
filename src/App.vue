<template>
  <div>
    <div class="container">
      <div class="weather-side">
        <div class="weather-gradient"></div>
        <CDateContainer :city-name="city" :country-name="country"/>
        <CWeatherContainer/>
      </div>
      <div class="info-side">
        <div class="today-info-container">
          <CTodayInfo/>
        </div>
        <div class="week-container">
          <CWeekList/>
        </div>
        <div class="location-container">
          <CButton>{{ $t('changeLocation') }}</CButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted, watch,
} from 'vue';
import CDateContainer from '@/components/CDateContainer.vue';
import CWeatherContainer from '@/components/CWeatherContainer.vue';
import CTodayInfo from '@/components/CTodayInfo.vue';
import CWeekList from '@/components/CWeekList.vue';
import CButton from '@/components/CButton.vue';
import feather from 'feather-icons';
import { useStore } from 'vuex';
import { ENDPOINT } from '@/code/request/request';
import { ICurrentWeatherData } from './code/types/currentWeatherData';

export default defineComponent({
  name: 'App',
  components: {
    CButton,
    CWeekList,
    CTodayInfo,
    CWeatherContainer,
    CDateContainer,
  },
  setup() {
    const store = useStore();
    const weatherData = computed<ICurrentWeatherData>(() => store.getters.showCurrentWeatherData);

    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          store.commit('updateLon', position.coords.longitude);
          store.commit('updateLat', position.coords.latitude);
        },
      );
    }

    const lon = computed(() => store.getters.showLongitude);
    const lat = computed(() => store.getters.showLatitude);

    function getCurrentWeatherData(url: string) {
      store.dispatch('getCurrentWeatherData', url);
    }

    const city = computed(() => store.getters.showCity);
    const country = computed(() => store.getters.showCountry);

    watch(
      () => [store.getters.showLongitude, store.getters.showLatitude],
      () => {
        const requestUrl = computed<string>(() => `${ENDPOINT.currentWeatherData}?lat=${lat.value}&lon=${lon.value}&appid=2f01b940bd0602117d74d88616da877d&units=metric&lang=ru}`);
        getCurrentWeatherData(requestUrl.value);
      },
    );

    onMounted(() => {
      getLocation();
      feather.replace();
    });

    return {
      weatherData,
      city,
      country,
    };
  },
});
</script>
