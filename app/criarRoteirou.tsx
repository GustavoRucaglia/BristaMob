import SearchResults1 from '@/components/resultPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AddRoteiro() {
  return (
    <QueryClientProvider client={queryClient}>
       <SearchResults1 />
    </QueryClientProvider>
  );
}
