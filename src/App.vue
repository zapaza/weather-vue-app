<template>
  <div>
    <div class="container">
      <div class="weather-side">
        <div class="weather-gradient"></div>
        <CDateContainer/>
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
  onMounted,
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
    const urlCurrentWeatherData = `${ENDPOINT.currentWeatherData}?lat=35&lon=139&appid=2f01b940bd0602117d74d88616da877d`;
    const weatherData = computed<ICurrentWeatherData>(() => store.getters.showCurrentWeatherData);

    const getWeatherData = (url: string) => {
      store.dispatch('getCurrentWeatherData', url);
    };

    onMounted(() => {
      feather.replace();
      getWeatherData(urlCurrentWeatherData);
    });

    return {
      weatherData,
    };
  },
});
</script>
