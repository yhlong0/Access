# Access
Record and track users access.
MERN app, NodeJS Restful API, MongoDB, Express framework and ReactJS, Redux, Material-UI for frontend.  


## Installation

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
4. POST /users/:userId




##### System information

1. GET /systems to retrieve all systems 




##### Role information

1. GET /roles to retrieve all available roles





## Contributing

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](https://github.com/yhlong0/access/wiki/How-to-Contribute), which covers the following:

* [How to build and run from source](https://github.com/yhlong0/access/wiki/How-to-Contribute#build-and-run-from-source)
* [The development workflow, including debugging and running tests](https://github.com/yhlong0/access/wiki/How-to-Contribute#development-workflow)
* [Coding Guidelines](https://github.com/yhlong0/access/wiki/Coding-Guidelines)
* [Submitting pull requests](https://github.com/yhlong0/access/wiki/How-to-Contribute#pull-requests)

Please see also our [Code of Conduct](CODE_OF_CONDUCT.md).
