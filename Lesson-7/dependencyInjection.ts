/**
 * Dependency Injection
 */

function getAnimals (id) {
  return fetch('https://localhost:8080/animals/' + id)
    .then(response => response.json())
    .then(data => data.result[0]);
}

function getAnimals2 (fetch, id) {
  return fetch('https://localhost:8080/animals/' + id)
    .then(response => response.json())
    .then(data => data.result[0]);
}

getAnimals2(fetch, 123);

//------------------------------------------------------------

/**
 * Test
 * Mocha Testing Library. Testing libraries jest, mocha, coveralls, coverage
 * Istanbul Code Coverage Library (istanbul) (nyc) (coveralls) (codecov) (coveralls)
 */

// describe('getAnimals', () => {
//   it('Calls fetch with correct url and returns animal', () => {
//     const mockFetch = url => {
//       assert(url === 'https://localhost:8080/animals');
//       return new Promise(function (resolve));
//     }
//   });
// })
//
// describe('getAnimals', () => {
//   it('Calls fetch with correct url and returns animal', () => {
//     return getAnimals(123).then(animal => {
//       expect(animal).to.be.an('object');
//     });
//   });
// })



