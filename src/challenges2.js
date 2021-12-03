// Desafio 10
function techList(array, name) {
  let techOrdenado = array.sort();

  let listaTech = [];
  
  for (let index of techOrdenado) {
    listaTech.push({
      tech: index,
      name: name
    })
  }

  if (array.length === 0) {
    return 'Vazio!'
  } else {
    return listaTech;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let test = true;

  for (value of array) {
    if (value < 0) {
      test = false;
    } else if (value > 9){
      test = false;
    }
  }

  for (index in array) {
    let repeatTest = [];

    for (index2 in array) {
      if (array[index] === array[index2]) {        
        repeatTest.push(array[index]);
      }
    }

    if (repeatTest.length >= 3) {
      test = false;
    }
  }

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (test === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    let phoneNumber = array.splice(0, 0, '(');

    phoneNumber = array.splice(3, 0, ')');

    phoneNumber = array.splice(4, 0, ' ');

    phoneNumber = array.splice(10, 0, '-');

    phoneNumber = array.join('');

    return phoneNumber;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  
  if (lineA >= (lineB + lineC)) {
    result = false;
  } else if (lineB > (lineA + lineC)) {
    result = false;
  } else if (lineC > (lineA + lineB)) {
    result = false;
  }

  return result;
}

// Desafio 13
function hydrate(string) {
  let caracteresSeparados = string.split('');
  
  let caracteresNumber = [];

  let sumNumbers = 0;

  for (let value of caracteresSeparados) {
    caracteresNumber.push(parseInt(value, 10))
  }

  for (let value2 of caracteresNumber) {    
    if (Number.isSafeInteger(value2) === true) {
     sumNumbers += value2;
    }
  } 

  if (sumNumbers === 1) {
    return sumNumbers + ' copo de água'
  } else {
    return sumNumbers + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
