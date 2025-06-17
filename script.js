const imcForm = document.getElementById("imcForm");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

imcForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calcularIMC(peso.value, altura.value);
});
function calcularIMC(p, a) {
  const conta = p / (a * a);

  if (conta < 18.5) {
    classificacao = "baixo do peso";
  } else if (conta <= 24.9) {
    classificacao = "peso normal";
  } else if (conta <= 29.9) {
    classificacao = "sobrepeso";
  } else if (conta <= 34.9) {
    classificacao = "obesidade grau I";
  } else if (conta <= 39.9) {
    classificacao = "obesidade grau II";
  } else {
    classificacao = "obesidade grau III";
  }
  console.log(`Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta.toFixed(2)}, seu nível é ${classificacao}`)

  resultado.textContent = `Seu peso é ${p}, sua altura é ${a} e seu IMC é ${conta.toFixed(2)}, seu nível é ${classificacao}`;
}
