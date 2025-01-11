const factorialInput = document.getElementById('factorialNumber');
const permutationN = document.getElementById('permutationN');
const permutationR = document.getElementById('permutationR');

function error() {
    return 'E'
}

function factorial(n) {
    if (n >= 70) {
        return error();
    } else if (n == 0) {
        return 1;
    } else {
        const done = n * factorial(n - 1);
        return done;
    }
}

function permutation(n, r) {
    if (n >= 70 || r >= 70) {
        return error();
    } else if (r > n) {
        return error();
    } else if (n == 0 && r == 0) {
        return 1;
    } else if (n == 0 && r > 0) {
        return error();
    } else {
        const done = factorial(n) / factorial(n - r);
        return done;
    }
}

document.querySelector('#permutationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const permutationNum = permutationN.value;
    const permutationReg = permutationR.value;
    const result = permutation(permutationNum, permutationReg);
    document.getElementById('permutationResult').innerHTML = result;
});

document.querySelector('#factorialForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const factorialNumber = factorialInput.value;
  const result = factorial(factorialNumber);
  document.getElementById('factorialResult').innerHTML = result;
});