var { default: parser } = require("../src/index.js");
var fs = require("fs");
var chai = require("chai");

describe("Test correctFormat", function() {
  chai.should();
  var p = new parser();

  it("00:00:28.9670 should become 00:00:28,967", function() {
    var result = p.correctFormat('00:00:28.9670');
    chai.expect(result).to.equal('00:00:28,967');
  });

  it("00:00:28.967 should become 00:00:28,967", function() {
    var result = p.correctFormat('00:00:28.967');
    chai.expect(result).to.equal('00:00:28,967');
  });

  it("00:00:28.96 should become 00:00:28,960", function() {
    var result = p.correctFormat('00:00:28.96');
    chai.expect(result).to.equal('00:00:28,960');
  });

  it("00:00:28.9 should become 00:00:28,900", function() {
    var result = p.correctFormat('00:00:28.9');
    chai.expect(result).to.equal('00:00:28,900');
  });

  it("00:00:28,96 should become 00:00:28,960", function() {
    var result = p.correctFormat('00:00:28,96');
    chai.expect(result).to.equal('00:00:28,960');
  });

  it("00:00:28,9 should become 00:00:28,900", function() {
    var result = p.correctFormat('00:00:28,9');
    chai.expect(result).to.equal('00:00:28,900');
  });

  it("00:00:28,0 should become 00:00:28,000", function() {
    var result = p.correctFormat('00:00:28,0');
    chai.expect(result).to.equal('00:00:28,000');
  });

  it("00:00:28,01 should become 00:00:28,010", function() {
    var result = p.correctFormat('00:00:28,01');
    chai.expect(result).to.equal('00:00:28,010');
  });

});
