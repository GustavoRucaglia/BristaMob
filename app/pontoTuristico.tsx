import React, { useEffect } from 'react';
import PontoTuristicoPage from '@/components/pontoTuristicoPage';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { getPontoInterreseById } from './utils/api-request';

interface PontoTuristicoProps {
  id: number;
}

const queryClient = new QueryClient();

export default function PontoTuristico({ id = 0 }: PontoTuristicoProps) {


  useEffect(() => {
    async function prefetchQueries() {
    queryClient.removeQueries({
      predicate: (query) => {
        const [key] = query.queryKey;
        return key === 'pontosByIds' && query.queryKey[1] !== id;
      },
    });

    if (id !== 0) {
      queryClient.prefetchQuery({
        queryKey: ['pontosByIds', id],
        queryFn: () => getPontoInterreseById(id),
      });
    }
  }

  prefetchQueries();
  }, [id, queryClient]);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <PontoTuristicoPage  />
      </QueryClientProvider>
    </>
  );
}
