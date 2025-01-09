const factorialInput = document.getElementById('factorialNumber');

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

addEventListener('submit', (event) => {
  event.preventDefault();
  const factorialNumber = factorialInput.value;
  const result = factorial(factorialNumber);
  document.getElementById('factorialResult').innerHTML = result;
});