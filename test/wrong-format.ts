var { default: parser } = require("../src/index.js");
var fs = require("fs");
var chai = require("chai");

var srt = fs.readFileSync("./test-file/dot-as-separator.srt", {
  encoding: "utf-8"
});

describe("Test wrong srt", function() {
  chai.should();
  var result: string[];
  var parser_instance = new parser();

  it("parser.fromSrt() should execute without crashes", function() {
    result = parser_instance.fromSrt(srt);
  });

  it("parser.fromSrt() should return array", function() {
    chai.expect(result).to.be.a("array");
  });

  it("parser.fromSrt() should contain valid subtitle objects", function() {
    for (var i in result) {
      var s = result[i];
      chai.expect(s).to.have.property("id");
      chai.expect(s).to.have.property("startTime");
      chai.expect(s).to.have.property("endTime");
      chai.expect(s).to.have.property("text");
    }
  });

  var originalData: string;
  it("parser.toSrt() should execute without crashes", function() {
    originalData = parser_instance.toSrt(result);
  });
});
