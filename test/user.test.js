let mongoose = require("mongoose");
let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    /*
    * Test the /Get route
    */

    describe('Users', () => {
        describe('/users get All users', () => {
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

    });

    /*
    * Test the /POST route
    */


});