import DentroRoteiroPage from '@/components/dentroRoteiroPage';
import SearchResults1 from '@/components/resultPage';
import RoteiroPage from '@/components/roteiroPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function DentroRoteiro() {
  return (
    <QueryClientProvider client={queryClient}>
       <DentroRoteiroPage />
    </QueryClientProvider>
  );
}
