# Elysia - Nuxt monorepo powered by moonrepo

This is a proof-of-concept repo challenging if it's possble to use Elysia, Nuxt and trpc technology together, which as of writing this, is.
This repo may be used as a base of real-world applications later.

## Prerequisites

This repo requires Proto to function. Make sure it's installed. If not follow this setup guide:
https://moonrepo.dev/docs/proto/install

### Installation

First install all required tools through proto:

```shell
$ proto install
```

This will install all tools required by the packages that live inside this repo.

Next, run the dev tastk. It will install all required dependencies and start all relevant packages in dev mode:

```shell
$ moon :dev
```

That should be it.

### TODO's

- [ ] Add build tasks
- [ ] (optional) Add docker support
