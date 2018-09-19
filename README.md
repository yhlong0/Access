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
