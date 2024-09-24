import { HomePage } from "@/components/homePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getPontoInterreseById, getPontoInterreseFilter } from "../utils/api-request";

const queryClient = new QueryClient();
 
export default async function Home({ sortBy = "id", id = 0, category = "" }: { sortBy?: string; id?: number; category?: string }) {
  const queryClient = new QueryClient();
 
 
  await queryClient.invalidateQueries({
    queryKey: ["pontos", sortBy],
  });
 
  // Prefetch queries with the latest data
  await queryClient.prefetchQuery({
    queryKey: ["pontos", category],
    queryFn: () => getPontoInterreseFilter(category),
  });
 
  if (id !== 0) {
    await queryClient.prefetchQuery({
      queryKey: ["pontosById", id],
      queryFn: () => getPontoInterreseById(id),
    });
  }
 
  // Ensure no stale or unnecessary queries are lingering
  queryClient.removeQueries({
    predicate: (query) => query.queryKey[0] === "pontos" && query.queryKey[1] !== sortBy,
  });
 

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <HomePage/>
    </QueryClientProvider>
    </>
  );
};