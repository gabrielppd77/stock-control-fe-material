import {
  QueryClient,
  QueryClientProvider as QueryClientProviderMain,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export default function QueryClientProvider({
  children,
}: QueryClientProviderProps) {
  return (
    <QueryClientProviderMain client={queryClient}>
      {children}
    </QueryClientProviderMain>
  );
}
