interface ILocalNames {
  ascii: string;
  // eslint-disable-next-line camelcase
  feature_name: string;
}

export interface IGeocodingResponse {
  name: string;
  // eslint-disable-next-line camelcase
  local_names: ILocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
