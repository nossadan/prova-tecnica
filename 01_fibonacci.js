function quadradoPerfeito(x) {
  let im = 1

  while (x > 0) {
    x -= im
    im += 2
  }

  return x === 0
}

function fibonacci(n) {
  let n1 = 5 * n * n + 4
  let n2 = 5 * n * n - 4

  return quadradoPerfeito(n1) || quadradoPerfeito(n2)
}

let num = 21

fibonacci(num)
  ? console.log(num + " faz parte da sequencia de Fibonacci")
  : console.log(num + " não faz parte da sequencia de Fibonacci")
