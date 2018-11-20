# Access
Record and track users access.
MERN app, NodeJS Restful API, MongoDB, Express framework and ReactJS, Redux, Material-UI for frontend.  
Add GraphQL on top of restful API


## Getting started

All you need to do is clone this repository

```
git clone https://github.com/yhlong0/access
npm install
npm start && cd client && npm start
```

Mongodb setup

```
mongod --port 27017 --dbpath e:\data

use access

db.createCollection('users');
db.createCollection('systems');
db.createCollection('roles');
```




### FRONT-END 

Redux to store the state, Material-UI for UI/UX design.  



### BACK-END RESTFUL API 

##### User information
1. GET /users to retrieve all users information
2. POST /users to add a new user
3. GET /users/:userId to get a user by ID
4. PUT /users/:userId update user by ID
5. DELETE /users/:userID delete user by ID


##### System information

Same REST API formmat

e.g. PUT /systems/:systemId update system information by ID

##### Role information

Same REST API formmat

e.g. PUT /roles/:roleId update role information by ID





## Contributing

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](https://github.com/yhlong0/access/wiki/How-to-Contribute), which covers the following:

* [How to build and run from source](https://github.com/yhlong0/access/wiki/How-to-Contribute#build-and-run-from-source)
* [The development workflow, including debugging and running tests](https://github.com/yhlong0/access/wiki/How-to-Contribute#development-workflow)
* [Coding Guidelines](https://github.com/yhlong0/access/wiki/Coding-Guidelines)
* [Submitting pull requests](https://github.com/yhlong0/access/wiki/How-to-Contribute#pull-requests)

Please see also our [Code of Conduct](CODE_OF_CONDUCT.md).
