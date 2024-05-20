const cypress = require('cypress')
const tesults = require('./cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJjZDlmNjRkLWQ5MDktNDZiNi1hNTcwLTVlOGQyMjMyNWQwOC0xNzE2MTcwNTI0MjE2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODllYTM5MWQtZTUwYS00NDY2LTg1ZTQtMjdhOGEyYzYwNDcyIiwidHlwZSI6InQifQ.fY8c8rske-ZbH3RQtZ8Lhs0b5ev1fmhiAT7q6tnhSng'

cypress.run({
  
})
.then((results) => {
  const args = {
      target: 'token',
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
})
