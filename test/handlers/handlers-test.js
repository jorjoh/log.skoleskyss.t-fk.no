'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 4, 'There are 4 standard handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.showLogin, 'Handler has method showLogin')

tap.ok(handlers.doLogin, 'Handler has method doLogin')

tap.ok(handlers.doLogout, 'Handler has method doLogout')