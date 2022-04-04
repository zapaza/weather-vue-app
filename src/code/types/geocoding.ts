interface ILocalNames {
  ascii: string;
  feature_name: string;
}

export interface IGeocodingResponse {
  name: string;
  local_names: ILocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
