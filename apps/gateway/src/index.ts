import { Elysia, t } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .ws('/rng', {
    response: t.Object({
      randomNumber: t.Number(),
    }),
    open: async function (ws) {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        ws.send({ randomNumber: Math.floor(Math.random() * 100) })
      }
    },
  })
  .listen(8080)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)

export type Gateway = typeof app
