import { treaty } from '@elysiajs/eden'
import type { Backend } from '@my-monorepo/backend'

export const useBackend = () => {
  return treaty<Backend>('/api/server', { keepDomain: true })
}
