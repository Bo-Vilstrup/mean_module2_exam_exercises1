/*
    Server has to be started before you can run this file
 */
var request = require('request');

request('http://localhost:3000/api/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});

var options = {
    url: "http://localhost:3000/api/add",
    method: "POST",
    json : true,
    body : {newJoke : "I'm a joke"}
};
request(options,function(error,res,body){
    console.log(body); //Assume the service returns the new Joke
});

request('http://localhost:3000/api/all', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});