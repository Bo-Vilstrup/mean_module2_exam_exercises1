/*
    run npm test, or press the run bottom
 */
var expect = require("chai").expect;
var request = require("request");
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;

before(function(done){
    var app = require('../app');
    server = http.createServer(app);
    server.listen(TEST_PORT,function(){
        console.log("Test server started "+"\n");
        done();
    });
});

after(function(done){
    server.close();
    console.log("Test server closed"+"\n");
    done();
});

describe("Test of the joke api" , function(){
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

    describe("GET: /api/all", function() {
        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/all",
            method: "GET",
            json: true
        };
        it("Should return all the jokes" ,function(done) {
            request(options, function(err, res, body) {
                var array = body.jokes;
                expect(array.length).to.have.length.equal(4);
                done();
            });
        });
    }); // End of GET :: all


    describe("GET: /api/random", function() {
        var options = {
            url: "http://localhost:" + TEST_PORT + "/api/random",
            method: "GET",
            json: true
        };
        it("Should return one joke" ,function(done) {
            request(options, function(err, res, body) {
                var array = body.jokes;
                expect(array.length).to.have.length.equal(1);
                done();
            });
        });
    }); // End of GET :: random
}); // End of Test og the joke api