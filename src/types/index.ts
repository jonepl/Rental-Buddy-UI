export interface InputEcho {
  resolved_address: string;
  latitude: number;
  longitude: number;
  bedrooms?: number;
  bathrooms?: number;
  radius_miles: number;
  days_old?: string;
}

export interface Comp {
  address: string;
  city?: string;
  state?: string;
  zip_code?: string;
  county?: string;
  longitude: number;
  latitude: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_footage: number;
  distance_miles?: number;
}

export interface CompsResponse {
  input: InputEcho;
  comps: Comp[];
}
