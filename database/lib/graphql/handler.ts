import { ApolloServer } from '@apollo/server';
import user from './entities/user';
import sepage from './entities/sepage';
import vine from './entities/vine';
import getVine from './entities/vine/resolvers/getVine';

const resolvers = [
    ...vine.resolvers,
]

const typeDefs = [
    vine.typeDefs,
    user.typeDef,
    sepage.typeDefs,
];

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        
    }
})