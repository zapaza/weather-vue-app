import axios from 'axios';

interface IEndpoint {
  geocoding: string;
  currentWeatherData: string;
}

export const ENDPOINT: IEndpoint = {
  geocoding: 'https://api.openweathermap.org/geo/1.0/direct',
  currentWeatherData: 'https://api.openweathermap.org/data/2.5/weather',
};

const httpHeaders = { accept: 'application/json' };

export abstract class HTTPRequest {
  static async get<T>(
    url: string,
  ):Promise<T> {
    try {
      const data = await axios.get<T>(url, {
        headers: httpHeaders,
      });

      return data.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }

      throw (error);
    }
  }
}
