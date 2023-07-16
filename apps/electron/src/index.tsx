import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { createRoot } from "react-dom/client";
import superjson from "superjson";

import { type AppRouter } from "@acme/trpc/server/routers/_app";

const trpc = createTRPCReact<AppRouter>();

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <HelloElectron />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

function HelloElectron() {
  const { data } = trpc.viewer.public.i18n.useQuery();

  if (!data) return null;

  return (
    <div>
      <h1>Hello Electron!</h1>
      {data.i18n}
    </div>
  );
}

// craete root
const container = document.getElementById("react-root");
if (!container) throw new Error("No container");
createRoot(container).render(<App />);
