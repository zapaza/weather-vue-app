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
         <CTodayInfo />
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
import { defineComponent, onMounted } from 'vue';
import CDateContainer from '@/components/CDateContainer.vue';
import CWeatherContainer from '@/components/CWeatherContainer.vue';
import CTodayInfo from '@/components/CTodayInfo.vue';
import CWeekList from '@/components/CWeekList.vue';
import CButton from '@/components/CButton.vue';
import feather from 'feather-icons';

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
    onMounted(() => {
      feather.replace();
    });

    return { };
  },
});
</script>
