var expect = require("chai").expect;
var jokes = require("../model/jokes");
var nock = require("nock");
var request = require("request");


var TEST_PORT = 3456;
var n = nock('http://localhost:'+TEST_PORT);

describe('api with nock', function () {

    before(function (done) {
        n.get('/api/random').reply(200,{jokes: jokes.getRandomJoke()});
        n.get('/api/all').reply(200,{jokes: jokes.allJokes()});
        n.post('/api/add').reply(200, function(uri, requestBody) {return requestBody;});

        done();
    });

    describe("POST: /api/add ", function () {
        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/add",
            method: "POST",
            json: true,
            body: {newJoke: "Its better to be late than to arrive ugly"}
        };
        it("should return the posted joke", function (done) {
            request(options, function (error, res, body) {
                var addedJoke = body.newJoke;
                expect(addedJoke).to.be.equal("Its better to be late than to arrive ugly");
                //You should also check whether the joke actually was added to the Data-store
                done();
            });
        })
    }); // End of POST


    describe("GET: /api/random", function() {
        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/random",
            method: "GET",
            json: true
        };
        it("Should return one joke" ,function(done) {
            request(options, function(err, res, body) {
                var array = [];
                array.push(body.jokes);
                expect(array.length).to.have.length.equal(1);
                done();
            });
        });
    }); // End of GET :: random

    describe("GET: /api/all", function() {
        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/all",
            method: "GET",
            json: true
        };
        it("Should return all the jokes" ,function(done) {
            request(options, function(err, res, body) {
                var array = body.jokes;
                expect(array.length).to.have.length.equal(4); // note got a joke from last test!!!!!
                done();
            });
        });
    }); // End of GET :: all



});