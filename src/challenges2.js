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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
