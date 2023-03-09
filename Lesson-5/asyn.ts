const userName = "Samim Ozcan";

function getUserName() {
  return `This is userName = ${userName}`;
}

const MAX_PRIME = 1000000;

function getPrimeNumber() {
  let primeNumber = 0;
  for (let i = 2; i < MAX_PRIME; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumber = i;
    }
  }
  return `This is primeNumber = ${primeNumber}`;
}

/**
 * The program will run until kill it.
 * Because of the getPrimeNumber function.
 * If I use async
 */

/**
 * Promise
 * 1. Promise is a object.
 */

const fetchOurUsers = fetch('herhangibirurl.com/users');
fetchOurUsers
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

console.log(getUserName());