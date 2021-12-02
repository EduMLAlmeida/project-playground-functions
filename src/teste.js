function encode(string) {
    let caracteresSeparados = string.split('');
  
    for (let index; index < caracteresSeparados.length; index += 1) {
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

let teste = 'This is an encoding test.';

encode(teste)