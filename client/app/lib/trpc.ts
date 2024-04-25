import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AnyRouter } from "@trpc/server";

interface Client extends AnyRouter{
  health: {
    query: (message: string) => Promise<string>
  }
}
export const trcp = createTRPCProxyClient<Client>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    })
  ]
})
