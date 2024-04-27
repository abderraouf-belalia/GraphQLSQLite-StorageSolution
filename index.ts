import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { BookResolvers } from './src/resolvers';
import { sequelize } from './src/models';


const typeDefs = await Bun.file('./schema.graphql').text()

const server = new ApolloServer({
  typeDefs,
  resolvers: [BookResolvers],
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  try {
    await sequelize.sync({ force: true })
    console.log('Book table created successfully!');

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);

  } catch(error) {

     console.error('Unable to create table : ', error);
  }
} catch (error) {

  console.error('Unable to connect to the database:', error);
}
