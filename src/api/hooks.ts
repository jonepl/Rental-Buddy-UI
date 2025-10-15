import { useQuery } from '@tanstack/react-query';
import { postComps } from './client';
import type { CompsResponse, RequestPayload } from '../types';

export function useCompsQuery(payload?: RequestPayload) {
  return useQuery<CompsResponse, Error>({
    queryKey: ['comps', payload],
    queryFn: ({ signal }) => {
      if (!payload) throw new Error('No payload provided');
      return postComps(payload, signal);
    },
    enabled: !!payload,
    staleTime: 1000 * 60,
  });
}
