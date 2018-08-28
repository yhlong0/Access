let Role = require('../models/role');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Clean Roles', () => {
    /*
    * Clean roles from database;
    */

    beforeEach((done) => {
        Role.remove({}, (err) => {
            done();
        });
    });

    describe('Roles', () => {

        /*
        * Test the /Get route
        */

        describe('/GET get all roles', () => {
            it('it should GET all the roles', (done) => {
                chai.request(app)
                    .get('/roles')
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

        describe('/POST add a role', () => {
            it('it should POST a role', (done) => {
                let role = {
                    name: "test 23",
                    description: "new 332 role description"
                };

                chai.request(app)
                    .post('/roles')
                    .send(role)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('description');
                        done();
                    });
            }).timeout(10000);
        });

        /*
        * Test the /GET:roleId route
        */

        describe('/GET:roleId get a role', () => {
            it('it should GET a role by the given id', (done) => {
                let role = new Role({
                    name: "test 23",
                    description: "new 332 role description"
                });
                role.save((err, role) => {
                    chai.request(app)
                        .get('/roles/' + role.id)
                        .send(role)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('name');
                            res.body.should.have.property('description');
                            res.body.should.have.property('_id').eql(role.id);
                            done();
                        });
                });
            });
        });

        /*
        * Test the /PUT:roleId route
        */

        describe('/PUT:roleId update a role', () => {
            it('it should UPDATE a role by the given id', (done) => {
                let role = new Role({
                    name: "oldname",
                    description: "olddescription"
                });
                role.save((err, role) => {
                    chai.request(app)
                        .put('/roles/' + role.id)
                        .send({
                            name: "updatename",
                            description: "updatedescription"
                        })
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('update success');
                            res.body.should.to.have.nested.property('role.name').eql('updatename');
                            res.body.should.to.have.nested.property('role.description').eql('updatedescription');
                            done();
                        });
                });
            });
        });


    });
});