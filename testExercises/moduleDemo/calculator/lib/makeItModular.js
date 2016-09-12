//
//    The callback function must be called using the idiomatic node(err, data)
//convention. This convention stipulates that unless there's an error, the
//first argument passed to the callback will be null, and the second will be
//your data. In this exercise, the data will be your filtered list of files,
//    as an Array. If you receive an error, e.g. from your call to
//fs.readdir(), the callback must be called with the error, and only the
//error, as the first argument.
//
//    You must not print directly to the console from your module file, only
//from your original program.
//
//    In the case of an error bubbling up to your original program file, simply
//check for it and print an informative message to the console.
//
//    These four things are the contract that your module must follow.
//
//» Export a single function that takes exactly the arguments described.
//» Call the callback exactly once with an error or some data as described.
//» Don't change anything else, like global variables or stdout.
//» Handle all the errors that may occur and pass them to the callback.
//
//    The benefit of having a contract is that your module can be used by anyone
//who expects this contract. So your module could be used by anyone else who
//does learnyounode, or the verifier, and just work.


/*
 module file -> export a single function

 directory name, filename extension and a cllback function.

 do filtering.
 */


var myModule = require('./mymodule');

var path = process.argv[2];
var fileExtension = process.argv[3];


myModule(path, fileExtension, function(err, data) {

    if(err) {
        console.log(err);
    } else {
        data.forEach(function(file) {
            console.log(file);
        });
    }

});