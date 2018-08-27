let User = require('../models/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

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
                        res.body.should.have.property('status');
                        done();
                    });
            }).timeout(10000);
        });
    });
});