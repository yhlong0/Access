const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// test data

const systems = [
    { name: 'System 1', description: 'First System', id: '1'},
    { name: 'System 2', description: 'Second System', id: '2' },
    { name: 'System 3', description: 'Third System', id: '3' },
    { name: 'System 4', description: 'Last System', id: '4' }
]

const SystemType = new GraphQLObjectType({
    name: 'System',
    fields: () => ({
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        system: {
            type: SystemType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                // code to get data from db.
                return _.find(books, { id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});