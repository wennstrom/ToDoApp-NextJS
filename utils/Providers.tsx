'use client'
import { ReactNode, useState } from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

export default function Provider ({children} : {children: ReactNode}) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
}