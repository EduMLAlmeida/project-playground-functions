// Desafio 1
function compareTrue(parametroTeste1, parametroTeste2) {
  // seu código aqui
  if (parametroTeste1 === true && parametroTeste2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorValor = array[0];

  let quantidadeVezes = 0;

  for (let index = 1; index <= array.length; index += 1) {
      if (array[index] > maiorValor) {
          maiorValor = array[index];
      }
  }

  for (let index2 of array) {
      if (index2 === maiorValor) {
          quantidadeVezes += 1;
      }
  }

  return quantidadeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  distanciaCat1 = 0;
  
  distanciaCat2 = 0;
  
  if (mouse > cat1) {
      distanciaCat1 = mouse - cat1;
    } else if (mouse < cat1) {
      distanciaCat1 = cat1 - mouse;
    } else {
      distanciaCat1 = 0;
    }

  if (mouse > cat2) {
      distanciaCat2 = mouse - cat2;
    } else if (mouse < cat2) {
      distanciaCat2 = cat2 - mouse;
    } else {
      distanciaCat2 = 0;
    }

  if (distanciaCat1 > distanciaCat2) {
      return 'cat2'
    } else if (distanciaCat1 < distanciaCat2) {
      return 'cat1'
    } else {
      return 'os gatos trombam e o rato foge'
    }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];

  for (index of array) {
    if ((index % 3 === 0) && (index % 5 !== 0)) {
      resultado.push('fizz');
    } else if ((index % 3 !== 0) && (index % 5 === 0)) {
      resultado.push('buzz');
    } else if ((index % 3 === 0) && (index % 5 === 0)) {
      resultado.push('fizzBuzz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let caracteresSeparados = string.split('');

  for (let index = 0; index < caracteresSeparados.length; index += 1) {
    if (caracteresSeparados[index] === 'a') {
      caracteresSeparados[index] = '1';
    } else if (caracteresSeparados[index] === 'e') {
      caracteresSeparados[index] = '2';
    } else if (caracteresSeparados[index] === 'i') {
      caracteresSeparados[index] = '3';
    } else if (caracteresSeparados[index] === 'o') {
      caracteresSeparados[index] = '4';
    } else if (caracteresSeparados[index] === 'u') {
      caracteresSeparados[index] = '5';
    }
  }

  return caracteresSeparados.join('')
}

function decode(string) {
  // seu código aqui
  let caracteresSeparados = string.split('');

  for (let index = 0; index < caracteresSeparados.length; index += 1) {
    if (caracteresSeparados[index] === '1') {
      caracteresSeparados[index] = 'a';
    } else if (caracteresSeparados[index] === '2') {
      caracteresSeparados[index] = 'e';
    } else if (caracteresSeparados[index] === '3') {
      caracteresSeparados[index] = 'i';
    } else if (caracteresSeparados[index] === '4') {
      caracteresSeparados[index] = 'o';
    } else if (caracteresSeparados[index] === '5') {
      caracteresSeparados[index] = 'u';
    }
  }

  return caracteresSeparados.join('')
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
