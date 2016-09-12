/**
 * Created by bo on 9/9/16.
 */


var expect = require("chai").expect;
var mm = require('../lib/mymodule.js');

var path = "/home/bo/insync/computer_science/4_Semester/Mean/2_period/testExercises/moduleDemo/calculator/lib";

describe('Read files from a directory and count the files by extension', function() {

    describe('Read files and sort them', function() {

        it('should get one file with file extension txt', function(done) {
            var fileExtension = "txt";
            mm(path, fileExtension, function(err, data) {

                if(err) return done(err);
                expect(data.length).to.have.length.equals(1);
                done();
            });
        }); // End of test 1

        it('should get three file with file extension js', function(done) {
            var fileExtension = "js";
            mm(path, fileExtension, function(err, data) {

                if(err) return done(err);
                expect(data.length).to.have.length.equals(3);
                done();
            });
        }); // End of test 2

    }); // End of
}); // End of tests






describe('Read files from a directory and count the files by extension', function() {

    var fs = require('fs');

    var temp = "temp";
    var fileName1 = "dummy1.txt";
    var fileName2 = "dummy2.js";
    var fileName3 = "dummy3.js";

    before(function() {
        fs.mkdirSync("./"+temp);
        fs.writeFileSync("./"+temp+"/"+fileName1);
        fs.writeFileSync("./"+temp+"/"+fileName2);
        fs.writeFileSync("./"+temp+"/"+fileName3);
    });

    after(function() {
        fs.unlinkSync("./"+temp+"/"+fileName1);
        fs.unlinkSync("./"+temp+"/"+fileName2);
        fs.unlinkSync("./"+temp+"/"+fileName3);
        fs.rmdirSync("./"+temp);
    });

    describe('Read files and sort them', function() {

        it('should get one file with file extension txt', function(done) {
            var fileExtension = "txt";
            mm("./"+temp, fileExtension, function(err, data) {

                if(err) return done(err);
                expect(data.length).to.have.length.equals(1);
                done();
            });
        }); // End of test 1

        it('should get three file with file extension js', function(done) {
            var fileExtension = "js";
            mm("./"+temp, fileExtension, function(err, data) {

                if(err) return done(err);
                expect(data.length).to.have.length.equals(2);
                done();
            });
        }); // End of test 2

    }); // End of
}); // End of tests


