import { treaty } from '@elysiajs/eden'
import type { Gateway } from '@my-monorepo/gateway'

export const useGateway = () => {
  return treaty<Gateway>('/api/server', { keepDomain: true })
}
