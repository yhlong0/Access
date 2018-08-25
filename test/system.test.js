let mongoose = require("mongoose");
let System = require('../models/system');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Systems', () => {
//     beforeEach((done) => {
//         Role.remove({}, (err) => {
//             done();
//         });
//     });

    /*
    * Test the /Get route
    */

    describe('Systems', () => {
        describe('/systems get All systems', () => {
            it('it should GET all the systems', (done) => {
                chai.request(app)
                    .get('/systems')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(3);
                        done();
                    });
            });
        });
    });

    /*
    * Test the /POST route
    */


});