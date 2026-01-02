"use client";

import type { PropsWithChildren } from "react";
import { Provider as JotaiProvider } from "jotai";
import QueryClientProvider from "@/components/providers/QueryClientProvider";

export function Providers({ children }: PropsWithChildren) {
    return (
        <QueryClientProvider>
            <JotaiProvider>{children}</JotaiProvider>
        </QueryClientProvider>
    );
}
