export interface RequestPayload {
  address?: string;
  latitude?: number;
  longitude?: number;
  radius_miles: number;
  bedrooms?: number;
  bathrooms?: number;
  days_old?: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function postComps(payload: RequestPayload, signal?: AbortSignal) {
  const res = await fetch(`${BASE_URL}/api/v1/comps`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch comps: ${res.status}`);
  }
  return res.json();
}
