/**
 * Created by bo on 9/9/16.
 */
var fs = require('fs');

var myFilter = function(path, fileExtension, callBackFunction) {

    var list = [];
    fs.readdir(path, function(err, files) {

        if(err) {
            return callBackFunction(err);
        } else {
            files.forEach(function(file) {
                if(file.split('.')[1] === fileExtension) { //return callBackFunction(null, file);

                    list.push(file);
                }
            });
            return callBackFunction(null, list);
        }
    });
};

module.exports = myFilter;