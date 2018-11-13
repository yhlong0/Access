const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

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
            }
        }
    }
});