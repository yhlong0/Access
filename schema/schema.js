const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean 
} = graphql;

// test data

const users = [
    { 
        lastname: 'User 1', 
        firstname: 'First 1', 
        _id: '1', 
        status: true, 
        joinDate: '2018-09-05T18:02:12.106Z',
        sysAccess: '1' 
    },
    { 
        lastname: 'User 2', 
        firstname: 'First 2', 
        _id: '2', 
        status: true, 
        joinDate: '2018-09-05T18:02:12.106Z',
        sysAccess: '2' 
    },
    { 
        lastname: 'User 3', 
        firstname: 'First 3', 
        _id: '3', 
        status: true, 
        joinDate: '2018-09-05T18:02:12.106Z', 
        sysAccess: '3' 
    },
    { 
        lastname: 'User 4', 
        firstname: 'First 4', 
        _id: '4', 
        status: true, 
        joinDate: '2018-09-05T18:02:12.106Z',
        sysAccess: '4'  
    },
]

const systems = [
    { name: 'System 1', description: 'First System', id: '1'},
    { name: 'System 2', description: 'Second System', id: '2' },
    { name: 'System 3', description: 'Third System', id: '3' },
    { name: 'System 4', description: 'Last System', id: '4' }
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        lastname: { type: GraphQLString },
        firstname: { type: GraphQLString },
        status: { type: GraphQLBoolean },
        joinDate: { type: GraphQLString },
        sysAccess: {
            type: SystemType,
            resolve(parent, args) {
                return _.find(systems, { id: parent.sysAccess })
            }
        }
    })
});

const SystemType = new GraphQLObjectType({
    name: 'System',
    fields: () => ({
        id: { type: GraphQLID},
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
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                // code to get data from db.
                return _.find(systems, { id: args.id});
            }
        },
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return _.find(users, { _id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});