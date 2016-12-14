var assert = require('assert');
var proxyquire = require('proxyquire')
var sinon = require("sinon");

const auth = {
  url: "test",
  user: ".user",
  password: ".password"
};

const jobName = jobName;
var data = {
  executable: {
    number: 40
  }
}
var jenkinsStub = () => {
  return {
    queue: {
      item: sinon.stub().yields(null, data)
    },
    build: {
      logStream: () => {
        return { on: function () {} };
      }
    }
  }
};

var streamLogs = proxyquire("../../lib/api/streamLogs", { 'jenkins': jenkinsStub });

describe('Streaming logs', function () {
  it('it should stream logs', function () {
    var auth = {}
    streamLogs(auth, jobName, 1, console, function (err) {
      assert(!err);
    })
  });
});