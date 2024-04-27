# graphqlsqlite-storagesolution

A simple template solution for storage that works for small to medium size projects.

# User Story

The idea is to have a storage solution to run as a networked service. To customize you need to change the `schema.graphql`, then adapt the `resolvers/` and `models/` accordingly.


# Idea 

When it comes to storage needs default to, database. Serve the access to a database through a GraphQL endpoint via the, `graphql > sequelize > [database of choice]` chain. Build the resolvers that reflect your storage operations. It is usually ALWAYS a good idea to have CRUD ops.

# Dependencies

This package depends on,

- Sequelize, https://sequelize.org/docs/v6/
- Apollo Server, https://www.apollographql.com/docs/apollo-server/

To install dependencies:

```bash
bun install
```

# How to run

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
