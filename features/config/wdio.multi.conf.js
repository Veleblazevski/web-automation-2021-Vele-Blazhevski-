const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')



exports.config = merge(baseConfig.config, {
    maxInstances: 3,
    capabilities: {
        user1: {
            capabilities: {
                browserName: 'chrome',
            }
        },
        user2: {
            capabilities: {
                browserName: 'firefox',
            }
        }
    }
})