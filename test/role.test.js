let mongoose = require("mongoose");
let Role = require('../models/role');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Roles', () => {
//     beforeEach((done) => {
//         Role.remove({}, (err) => {
//             done();
//         });
//     });

    /*
    * Test the /Get route
    */

    describe('Roles', () => {
        describe('/roles get All roles', () => {
            it('it should GET all the roles', (done) => {
                chai.request(app)
                    .get('/roles')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(5);
                        done();
                    });
            });
        });
    });

    /*
    * Test the /POST route
    */

    describe('/POST role', () => {
        it('it should not POST a role without role name', (done) => {
            let role = {
                name: "test",
                description: "new role description"
            };

            chai.request(app)
                .post('/roles')
                .send(role)
                .end((err, res) => {
                    res.should.have.status(200);
                });
        });
    });


});