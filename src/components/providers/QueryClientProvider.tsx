"use client";

import { useState } from "react";
import { QueryClientProvider as TanstackQueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } }));
    return <TanstackQueryClientProvider client={client}>{children}</TanstackQueryClientProvider>;
}
