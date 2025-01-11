const factorialInput = document.getElementById('factorialNumber');

function error() {
    return 'E'
}

function factorial(n) {
    if (n >= 70) {
        return error();
    } else if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

document.querySelector('#factorialForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const factorialNumber = factorialInput.value;
  const result = factorial(factorialNumber);
  document.getElementById('factorialResult').innerHTML = result;
});