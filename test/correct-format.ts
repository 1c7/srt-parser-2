import chai from "chai";
import parser from "../src/index.js";

describe("Test different time format", function () {
  chai.should();
  var p = new parser();

  // All 3 position (hour, minute, second) has only 1 digit (wrong)
  it("1:1:5,000 should become 01:01:05,000", function () {
    var result = p.correctFormat("1:1:5,000");
    chai.expect(result).to.equal("01:01:05,000");
  });

  // Hour is only 1 digit (wrong)
  it("9:23:10,500 should become 09:23:10,500", function () {
    var result = p.correctFormat("0:00:10,500");
    chai.expect(result).to.equal("00:00:10,500");
  });

  // Second is only 1 digit (wrong)
  it("00:00:8,000 should become 00:00:08,000", function () {
    var result = p.correctFormat("00:00:8,000");
    chai.expect(result).to.equal("00:00:08,000");
  });

  // Minute is only 1 digit (wrong)
  it("00:0:08,000 should become 00:00:08,000", function () {
    var result = p.correctFormat("00:0:08,000");
    chai.expect(result).to.equal("00:00:08,000");
  });

  // millisecond has 4 digit (wrong) (it should be 3 digit)
  it("00:00:28.9670 should become 00:00:28,967", function () {
    var result = p.correctFormat("00:00:28.9670");
    chai.expect(result).to.equal("00:00:28,967");
  });

  // dot between second and millisecond (wrong)
  it("00:00:28.967 should become 00:00:28,967", function () {
    var result = p.correctFormat("00:00:28.967");
    chai.expect(result).to.equal("00:00:28,967");
  });

  // dot(wrong) and 2 digit millisecond (wrong)
  it("00:00:28.96 should become 00:00:28,960", function () {
    var result = p.correctFormat("00:00:28.96");
    chai.expect(result).to.equal("00:00:28,960");
  });

  // dot(wrong) and 1 digit millisecond (wrong)
  it("00:00:28.9 should become 00:00:28,900", function () {
    var result = p.correctFormat("00:00:28.9");
    chai.expect(result).to.equal("00:00:28,900");
  });

  // 2 digit millisecond (wrong)
  it("00:00:28,96 should become 00:00:28,960", function () {
    var result = p.correctFormat("00:00:28,96");
    chai.expect(result).to.equal("00:00:28,960");
  });

  // 1 digit millisecond (wrong)
  it("00:00:28,9 should become 00:00:28,900", function () {
    var result = p.correctFormat("00:00:28,9");
    chai.expect(result).to.equal("00:00:28,900");
  });

});
