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