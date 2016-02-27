exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: 'null' ,
  specs: ['todo-spec.js'],
  baseUrl: 'http://localhost:9876',
  sauceUser: 'flaviomeira10',
  sauceKey: '2e2fe2d0-1d8f-4296-be0c-66881f07b96b'
};