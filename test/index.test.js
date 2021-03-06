import { expect } from 'chai';
import plugin from '../src';

describe('feathers-authentication-popups-github', () => {
  it('is CommonJS compatible', () => {
    expect(typeof require('../lib')).to.equal('function');
  });

  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
    var options = {
      successRedirect: '/auth/success'
    };
    expect(typeof plugin(options, {name: 'feathers-jwt'})).to.equal('function');
  });
});
