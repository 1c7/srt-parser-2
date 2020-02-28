var { default: parser } = require("../src/index.js");
var fs = require("fs");
var chai = require("chai");

var srt = fs.readFileSync("./test-file/Welcome-648062.en.srt", { encoding: "utf-8" });

describe("Read 00:00:00.05 --> 00:00:02.00", function() {
  chai.should();
  var p = new parser();
  var result = p.fromSrt(srt);
  
  it("into 00:00:00,050 and 00:00:02,000", function() {
    chai.expect(result[0].startTime).to.equal('00:00:00,050');
    chai.expect(result[0].endTime).to.equal('00:00:02,000');
  });
});
