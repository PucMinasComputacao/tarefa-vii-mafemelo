function iniciarSimulador() {
  var nome = prompt("Qual é o seu nome?");

  var renda = Number(prompt("Qual é a sua renda mensal?"));
  while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido. Digite a renda mensal:"));
  }

  var qtd = Number(prompt("Quantas despesas você quer informar? (1 a 5)"));
  if (qtd < 1) qtd = 1;
  if (qtd > 5) qtd = 5;

  var total = 0;
  for (var i = 1; i <= qtd; i++) {
    var despesa = Number(prompt("Despesa " + i + ":"));
    while (isNaN(despesa)) {
      despesa = Number(prompt("Valor inválido. Despesa " + i + ":"));
    }
    total = total + despesa;
  }

  var sobra = renda - total;
  var mensagem = "";

  if (total > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
  } else if (sobra >= renda * 0.30) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }

  var resultado =
    "Nome: " + nome + "\n" +
    "Renda: R$ " + renda.toFixed(2) + "\n" +
    "Despesas: R$ " + total.toFixed(2) + "\n" +
    "Sobra: R$ " + sobra.toFixed(2) + "\n\n" +
    mensagem;

  alert(resultado);
  console.log(resultado);
}