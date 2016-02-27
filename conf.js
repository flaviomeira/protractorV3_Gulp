exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://ondemand.saucelabs.com',
  //seleniumServerJar: 'null' ,
  specs: ['todo-spec.js'],
  baseUrl: 'http://localhost:9876',
  capabilities: {
  	'browserName': 'firefox',
  	'platform': 'Windows 10',
  	'version': '44.0'
  },
  sauceUser: 'flaviomeira10',
  sauceKey: '2e2fe2d0-1d8f-4296-be0c-66881f07b96b'
};