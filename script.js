const Calcular = document.getElementById('calcular');

function calculadora_de_investimentos(){
  const nome = document.getElementById('nome').value;
  const investimento = document.getElementById('investimento').value;
  const juros = document.getElementById('juros').value;
  const tempo = document.getElementById('tempo').value;

  const resultado = document.getElementById('resultado');
  

  if (
    nome !== '' &&
    investimento !== '' &&
    juros !== '' &&
    tempo !== ''
  ) {
    const valorPoupado = (
    investimento *
    (((1 + juros / 100) ** tempo - 1) / (juros / 100))
    );

    resultado.textContent = `${nome},Se você aplicar R$ ${investimento}
    , à taxa de juros de ${juros}% ao mês, durante ${tempo} meses,
    acumulará uma poupança de R$ ${valorPoupado}`;

  } else {
    resultado.textContent =
    'Para o seu valor poupado, favor preencher todos os campos.';}
}

Calcular.addEventListener('click', calculadora_de_investimentos);