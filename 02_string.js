function contagem(str) {
  let contar = 0
  for (let char of str.toLowerCase()) {
    if (char === "a") {
      contar++
    }
  }
  return contar
}

//Exemplo
let texto = "Testando"
let quantidade = contagem(texto)

console.log(
  quantidade > 0
    ? `A letra "A" aparece ${quantidade} vezes.`
    : "A letra 'A' não aparece na string."
)
