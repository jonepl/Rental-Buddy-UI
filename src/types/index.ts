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
  id?: string;
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

export interface SearchFilters {
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  square_footage?: number;
  radius_miles: number; // required
  days_old?: string; // e.g., "*:270"
}

export interface SearchFormState extends SearchFilters {
  address?: string;
  latitude?: number;
  longitude?: number;
}

// Request payload must contain EITHER address OR (latitude AND longitude), AND radius_miles
type AddressOnly = {
  address: string;
  latitude?: never;
  longitude?: never;
};

type CoordsOnly = {
  address?: never;
  latitude: number;
  longitude: number;
};

type OptionalFilters = {
  bedrooms?: number;
  bathrooms?: number;
  days_old?: string;
};

export type RequestPayload = (AddressOnly | CoordsOnly) & OptionalFilters & {
  radius_miles: number;
};
