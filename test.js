"use strict";

var cleanBaseURL = require('./');
var expect = require('chai').expect;

describe('clean-base-url', function () {
  it('handles common scenarios', function(){
    expect(cleanBaseURL()).to.equal('/');
    expect(cleanBaseURL('')).to.equal('');
    expect(cleanBaseURL('/')).to.equal('/');
    expect(cleanBaseURL('ember')).to.equal('/ember/');
    expect(cleanBaseURL('/ember')).to.equal('/ember/');
    expect(cleanBaseURL('ember/')).to.equal('/ember/');
    expect(cleanBaseURL('/ember/')).to.equal('/ember/');
    expect(cleanBaseURL('ember/hamsters')).to.equal('/ember/hamsters/');
    expect(cleanBaseURL('/ember/hamsters/')).to.equal('/ember/hamsters/');
    expect(cleanBaseURL('app://localhost')).to.equal('app://localhost/');
    expect(cleanBaseURL('app://localhost/')).to.equal('app://localhost/');
  });
});
