import { treaty } from "@elysiajs/eden"
import type { Server } from '@my-monorepo/backend'

export const useServer = () => {
    const server = treaty<Server>('/api/server', { keepDomain: true })
    return server
}