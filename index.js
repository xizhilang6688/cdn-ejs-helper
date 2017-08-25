var helpers = require('./lib/helpers.js')
var lodash = require('lodash')

var defaults = {
		loclaUrl:'../..',
    cdnUrl: 'https://z.zhipin.com',
    projectName: 'H5',
    cssDir: 'css',
    jsDir: 'js'
}

var run

module.exports = run =  function (opts) {
    opts = lodash.extend(defaults, opts)
    return helpers(opts)
}


run()