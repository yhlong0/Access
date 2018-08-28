let System = require('../models/system');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Clean Systems', () => {
    /*
    * Clean systems from database;
    */

    beforeEach((done) => {
        System.remove({}, (err) => {
            done();
        });
    });

    describe('Systems', () => {
        
        /*
        * Test the /Get route
        */

        describe('/GET get all systems', () => {
            it('it should GET all the systems', (done) => {
                chai.request(app)
                    .get('/systems')
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

        describe('/POST add a system', () => {
            it('it should POST a system', (done) => {
                let system = {
                    name: "test system",
                    description: "new 332 system description"
                };

                chai.request(app)
                    .post('/systems')
                    .send(system)
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
        * Test the /GET:systemId route
        */

        describe('/GET:systemId get a system', () => {
            it('it should GET a system by the given id', (done) => {
                let system = new System({
                    name: "test 23",
                    description: "new 332 system description"
                });
                system.save((err, system) => {
                    chai.request(app)
                        .get('/systems/' + system.id)
                        .send(system)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('name');
                            res.body.should.have.property('description');
                            res.body.should.have.property('_id').eql(system.id);
                            done();
                        });
                });
            });
        });

        /*
        * Test the /PUT:roleId route
        */
        
        describe('/PUT:systemId update a system', () => {
            it('it should UPDATE a system by given id', (done) => {
                let system = new System({
                    name: "oldsystem",
                    description: "olddescription"
                });
                system.save((err, system) => {
                    chai.request(app) 
                        .put('/systems/' + system.id)
                        .send({
                            name: "updatesystem",
                            description: "updatedescription"
                        })
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('message').eql('update success');
                            res.body.should.to.have.nested.property('system.name').eql('updatesystem');
                            res.body.should.to.have.nested.property('system.description').eql('updatedescription');
                            done();                            
                        });
                });
            });
        });

    });
});