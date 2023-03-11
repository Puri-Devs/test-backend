const serverless= require('serverless-http')
const srv = require('./auth')
// We need to define our function name for express routes to set the correct base path
const functionName = 'serverless-http'

// Initialize express app
const app = srv(functionName)

// Export lambda handler
module.exports.handler = serverless(app)