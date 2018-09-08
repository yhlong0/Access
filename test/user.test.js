let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Clean Users', () => {
    /*
    * Clean users from database;
    */
    
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    describe('Users', () => {

        /*
        * Test the /Get route
        */

        describe('/GET get all users', () => {
            it('it should GET all the users', (done) => {
                chai.request(app)
                    .get('/users')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(0);
                        done();
                    });
            });
        });

        /*
        * Test the /POST route
        */

        describe('/POST add a user', () => {
            it('it should POST a user', (done) => {
                let user = {
                    lastname: 'test_lastname',
                    firstname: 'test_firstname',
                    joinDate: new Date(),
                    status: true,
                    sysAccess: [
                    ],
                    roles: [
                    ]
                };

                chai.request(app)
                    .post('/users')
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('lastname');
                        res.body.should.have.property('firstname');
                        res.body.should.have.property('joinDate');
                        res.body.should.have.property('status').eql(true);
                        res.body.should.have.property('sysAccess').which.is.a('array');
                        res.body.should.have.property('roles').which.is.a('array');
                        done();
                    });
            }).timeout(10000);
        });

        /*
        * Test the /GET:userId route
        */

        describe('/GET:userId get a user', () => {
            it('it should GET a user by the given id', (done) => {
                let user = new User({
                    lastname: 'test_lastname',
                    firstname: 'test_firstname',
                    joinDate: new Date(),
                    status: true,
                    sysAccess: [
                    ],
                    roles: [
                    ]
                });
                user.save((err, user) => {
                    chai.request(app)
                        .get('/users/' + user.id)
                        .send(user)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('lastname');
                            res.body.should.have.property('firstname');
                            res.body.should.have.property('joinDate');
                            res.body.should.have.property('status').eql(true);
                            res.body.should.have.property('sysAccess').which.is.a('array');
                            res.body.should.have.property('roles').which.is.a('array');
                            res.body.should.have.property('_id').eql(user.id);
                            done();
                        });
                });
            });
        });

        /*
        * Test the /PUT:userId route
        */
       describe('/PUT:userId update a user', () => {
            it('it should UPDATE a user on /users/:userId PUT', (done) => {
                let user = new User({
                    lastname: 'old_lastname',
                    firstname: 'old_firstname',
                    joinDate: new Date(),
                    status: true,
                    sysAccess: [
                    ],
                    roles: [
                    ]
                });
                user.save((err, user) => {
                    chai.request(app)
                        .put('/users/' + user.id)
                        .send({
                            lastname: 'update_lastname',
                            firstname: 'update_firstname',
                            joinDate: new Date(),
                            status: false,
                        })
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('lastname').eql('update_lastname');
                            res.body.should.have.property('firstname').eql('update_firstname');
                            res.body.should.have.property('joinDate');
                            res.body.should.have.property('status').eql(false);
                            res.body.should.have.property('sysAccess').which.is.a('array');
                            res.body.should.have.property('roles').which.is.a('array');
                            res.body.should.have.property('_id').eql(user.id);
                            done();
                        });
                });
            });
        });

        /*
        * Test the /DELETE:userId route
        */
       
       describe('/DELETE:userId delete user by Id', () => {
            it('it should DELETE the user by Id', (done) => {
                let user = new User({
                    lastname: 'old_lastname',
                    firstname: 'old_firstname',
                    joinDate: new Date(),
                    status: true,
                    sysAccess: [
                    ],
                    roles: [
                    ]
                });
                user.save((err, user) => {
                    chai.request(app)
                    .delete('/users/'+ user.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('delete success');
                        done();
                    });
                });

            });
        });
    });
});