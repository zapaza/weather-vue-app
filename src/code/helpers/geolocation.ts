export class geolocation {
  static geo = navigator.geolocation;

  static lat: number;

  static lon: number;

  static currentLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function success(pos: GeolocationPosition) {
      const { coords } = pos;

      geolocation.lat = coords.latitude;
      geolocation.lon = coords.longitude;
    }

    this.geo.getCurrentPosition(success, error, options);

    return {
      geolocation,
    };
  }
}

export default {
  geolocation,
};
