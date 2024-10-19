import BuscarPage from '@/components/buscarPage';
import ProfilePage from '@/components/PerfilPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Crie uma instância do QueryClient
const queryClient = new QueryClient();

export default function Buscar() {
  return (
    // Envolva a aplicação com o QueryClientProvider
    <QueryClientProvider client={queryClient}>
       <BuscarPage />
    </QueryClientProvider>
  );
}
