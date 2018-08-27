let mongoose = require("mongoose");
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
    });
});