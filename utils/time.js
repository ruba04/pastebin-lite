function getCurrentTime(req) {
if (process.env.TEST_MODE === '1' && req.headers['x-test-now-ms']) {
return parseInt(req.headers['x-test-now-ms']);
}
return Date.now();
}


module.exports = { getCurrentTime };