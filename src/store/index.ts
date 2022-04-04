import { ActionContext, createStore } from 'vuex';
import { ICurrentWeatherData } from '@/code/types/currentWeatherData';
import { HTTPRequest } from '@/code/request/request';
import { geolocation } from '@/code/helpers/geolocation';

interface IState {
  currentWeatherData: ICurrentWeatherData | Record<string, string>;
  lon: number | null;
  lat: number | null;
  city: string;
  country: string;
}

export default createStore<IState>({
  state: {
    currentWeatherData: {},
    lon: null,
    lat: null,
    city: '',
    country: '',
  },
  actions: {
    async getCurrentWeatherData(ctx: ActionContext<IState, IState>, url: string) {
      const data = await HTTPRequest.get<ICurrentWeatherData>(url);

      ctx.commit('updateCurrentWeatherData', data);
    },

    getLocation(ctx: ActionContext<IState, IState>) {
      const { lon, lat } = geolocation.currentLocation().geolocation;

      console.log(lon, lat);

      ctx.commit('updateLon', lon);
      ctx.commit('updateLat', lat);
    },

    async getLocationsNames(ctx: ActionContext<IState, IState>, url: string) {
      const data = await HTTPRequest.get<ICurrentWeatherData>(url);

      const currentCity = data.name;
      const currentCountry = data.sys.country;

      ctx.commit('updateCity', currentCity);
      ctx.commit('updateCountry', currentCountry);
    },

  },
  mutations: {
    updateCurrentWeatherData(state: IState, weatherData: ICurrentWeatherData) {
      state.currentWeatherData = weatherData;
    },

    updateLon(state: IState, lon: number) {
      state.lon = lon;
    },

    updateLat(state: IState, lat: number) {
      state.lat = lat;
    },

    updateCity(state: IState, city: string) {
      state.city = city;
    },

    updateCountry(state: IState, country: string) {
      state.country = country;
    },
  },
  getters: {
    showCurrentWeatherData(state: IState) {
      return state.currentWeatherData;
    },

    showLon(state: IState) {
      return state.lon;
    },

    showLat(state: IState) {
      return state.lat;
    },

    showCity(state: IState) {
      return state.city;
    },

    showCountry(state: IState) {
      return state.country;
    },
  },
});
