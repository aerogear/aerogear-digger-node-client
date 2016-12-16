const proxyquire = require('proxyquire');
const sinon = require("sinon");
const chai = require("chai");
const assert = chai.assert;

const auth = {
  url: "test",
  user: "user",
  password: "password"
};

const data = {
  executable: {
    number: 1
  }
};

const JenkinsWrapper = {
  info: sinon.stub().yields(null, data)
};

const jenkinsStub = () => JenkinsWrapper;

var jenkinsInfo = proxyquire("../../lib/api/jenkinsInfo", { 'jenkins': jenkinsStub });

describe('jenkinsInfo', function() {
  it('it should return jenkinsInfo', function(testFinished) {
    jenkinsInfo(auth, function(err, data) {
      assert.isNotOk(err, "Should not return error");
      assert.isOk(data, "Should return data");
      testFinished();
    });
  });
});