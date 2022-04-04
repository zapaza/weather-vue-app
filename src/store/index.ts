import { ActionContext, createStore } from 'vuex';
import { ICurrentWeatherData } from '@/code/types/currentWeatherData';
import { HTTPRequest } from '@/code/request/request';

interface IState {
  currentWeatherData: ICurrentWeatherData | Record<string, string>;
  latitude: null | number;
  longitude: null | number;
  city: string;
  country: string;
}

export default createStore<IState>({
  state: {
    currentWeatherData: {},
    latitude: null,
    longitude: null,
    city: '',
    country: '',
  },
  actions: {
    async getCurrentWeatherData(ctx: ActionContext<IState, IState>, url: string) {
      const data = await HTTPRequest.get<ICurrentWeatherData>(url);

      ctx.commit('updateCurrentWeatherData', data);
      ctx.commit('updateLocationNames', data);
    },
  },
  mutations: {
    updateCurrentWeatherData(state: IState, weatherData: ICurrentWeatherData) {
      state.currentWeatherData = weatherData;
    },

    updateLon(state: IState, lon: number) {
      state.longitude = lon;
    },

    updateLat(state: IState, lat: number) {
      state.latitude = lat;
    },
    updateLocationNames(state: IState, locationData: ICurrentWeatherData) {
      state.city = locationData.name;
      state.country = locationData.sys.country;
    },
  },
  getters: {
    showCurrentWeatherData(state: IState) {
      return state.currentWeatherData;
    },
    showLongitude(state: IState) {
      return state.longitude;
    },
    showLatitude(state: IState) {
      return state.latitude;
    },
    showCity(state: IState) {
      return state.city;
    },
    showCountry(state: IState) {
      return state.country;
    },
  },
});
