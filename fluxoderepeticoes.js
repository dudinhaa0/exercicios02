const menu = 10;

    switch (menu) {
      case 1: 
      console.log("Exercicio 1 selecionado - Listar nomes com for...of. Executando...\n");
      exercicio1(); 
      break;

      case 2: 
      console.log("Exercicio 2 selecionado - Somar valores com for...of. Executando...\n");
      exercicio2(); 
      break;

      case 3: 
      console.log("Exercicio 3 selecionado - Exibir propriedades de um objeto com for...in. Executando...\n");
      exercicio3(); 
      break;

      case 4:
      console.log("Exercicio 4 selecionado - Contar quantas propriedades tem um objeto. Executando...\n"); 
      exercicio4(); 
      break;

      case 5: 
      console.log("Exercicio 5 selecionado - Concatenar nomes em uma string com for...of. Executando...\n");
      exercicio5(); 
      break;

      case 6: 
      console.log("Exercicio 6 selecionado - Imprimir tipos de dados de elementos de um array. Executando...\n");
      exercicio6(); 
      break;

      case 7:
      console.log("Exercicio 7 selecionado - Transformar valores de um objeto. Executando...\n");
      exercicio7(); 
      break;

      case 8: 
      console.log("Exercicio 8 selecionado - Converter objeto em array de strings. Executando...\n");
      exercicio8(); 
      break;

      case 9: 
      console.log("Exercicio 9 selecionado - Contar quantos valores únicos existem em um array. Executando...\n");
      exercicio9(); 
      break;

      case 10: 
      console.log("Exercicio 10 selecionado - Criar um objeto com a contagem de caracteres de uma frase. Executando...\n");
      exercicio10(); 
      break;
    }


// 1. Listar nomes com for...of
function exercicio1() {
  const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
  for (const nome of nomes) {
    console.log(nome);
  }
}

// 2. Somar valores com for...of
function exercicio2() {
  const numeros = [10, 20, 30, 40];
  let soma = 0;

  for (const num of numeros) {
    soma += num;
  }

  console.log("Soma total:", soma);
}

// 3. Exibir propriedades com for...in
function exercicio3() {
  const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };

  for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }
}

// 4. Contar propriedades de um objeto
function exercicio4() {
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  let count = 0;

  for (const chave in obj) {
    count++;
  }

  console.log("Total de propriedades:", count);
}

// ===============================
// MÉDIOS
// ===============================

// 5. Concatenar nomes
function exercicio5() {
  const nomes = ["Ana", "Bruno", "Carlos"];
  let resultado = "";

  for (const nome of nomes) {
    resultado += nome + ", ";
  }

  console.log(resultado.slice(0, -2));
}

// 6. Tipos de dados
function exercicio6() {
  const valores = [10, "texto", true, null, undefined];

  for (const valor of valores) {
    console.log(valor, "->", typeof valor);
  }
}

// 7. Incrementar idades
function exercicio7() {
  const pessoas = {
    Ana: 20,
    Bruno: 25,
    Carlos: 30
  };

  for (const nome in pessoas) {
    pessoas[nome] += 1;
  }

  console.log(pessoas);
}

// 8. Objeto para array de strings
function exercicio8() {
  const obj = { a: 1, b: 2, c: 3 };
  const resultado = [];

  for (const chave in obj) {
    resultado.push(`${chave}: ${obj[chave]}`);
  }

  console.log(resultado);
}

// ===============================
// DIFÍCEIS
// ===============================

// 9. Valores únicos com Set
function exercicio9() {
  const array = [1, 2, 2, 3, 4, 4, 5];
  const setUnico = new Set(array);

  console.log("Valores únicos:" , setUnico.size);
}

// 10. Contar caracteres de uma frase
function exercicio10() {
  const frase = "Olá pessoas!";
  const contagem = {};

  for (const letra of frase) {
    if (letra !== " ") {
      contagem[letra] = (contagem[letra] || 0) + 1;
    }
  }

  console.log(contagem);
}
