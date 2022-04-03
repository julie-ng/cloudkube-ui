const base = require('./webpack.config')

module.exports = Object.assign(base, {
	mode: 'development',
	watch: true,
	watchOptions: {
		aggregateTimeout: 200,
    poll: 1000,
	}
})