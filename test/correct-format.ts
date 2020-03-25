var { default: parser } = require("../src/index.js");
var fs = require("fs");
var chai = require("chai");

describe("Test correctFormat", function() {
  chai.should();
  var p = new parser();

  // All 3 (hour, minute, second) is only 1 digit
  it("1:1:5,000 should become 01:01:05,000", function() {
    var result = p.correctFormat('1:1:5,000');
    chai.expect(result).to.equal('01:01:05,000');
  });

  // Second is only 1 digit
  it("00:00:8,000 should become 00:00:08,000", function() {
    var result = p.correctFormat('00:00:8,000');
    chai.expect(result).to.equal('00:00:08,000');
  });

  // Minute is only 1 digit
  it("00:0:08,000 should become 00:00:08,000", function() {
    var result = p.correctFormat('00:0:08,000');
    chai.expect(result).to.equal('00:00:08,000');
  });

  // Hour is only 1 digit
  it("0:00:10,500 should become 00:00:10,500", function() {
    var result = p.correctFormat('0:00:10,500');
    chai.expect(result).to.equal('00:00:10,500');
  });

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
