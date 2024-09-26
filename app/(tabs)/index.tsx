import { HomePage } from "@/components/homePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { getPontoInterreseById, getPontoInterreseFilter } from "../utils/api-request";
 
const queryClient = new QueryClient();
 
export default function Home({ sortBy = "", id = 0, category = "" }: { sortBy?: string; id?: number; category?: string }) {
 
  useEffect(() => {
    async function prefetchQueries() {
      // Invalidate previous queries with the same key but different sort order
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
    }
 
    prefetchQueries();
  }, [sortBy, id, category]); // Run effect when sortBy, id, or category changes
 
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}