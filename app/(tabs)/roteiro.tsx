import SearchResults1 from '@/components/resultPage';
import RoteiroPage from '@/components/roteiroPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Roteiro() {
  return (
    <QueryClientProvider client={queryClient}>
       <RoteiroPage />
    </QueryClientProvider>
  );
}
