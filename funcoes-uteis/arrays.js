var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array.toString());
console.log(array.join(' | ')); //Espefica o separador

array.push("Sansa"); // Add a new element
array.unshift("Sansa"); // Add a new element in first position

console.log(array);

var elemento = array.pop(); // Remove e retorna o último elemento
elemento = array.shift(); // Remove o primeiro elemento

console.log(elemento);
console.log(array);

array[1] = "Jon Snow"; //Edit

console.log(array);

var slice = array.slice(3,5); // Pega parte do array sem modifica
console.log(slice);

var splice = array.splice(1,1,"Arya", "Sansa"); //Remove e adiciona elementos
console.log(splice);
console.log(array);

array.splice(3,1); //Remove qtd de elementos a partir da posição especificada

console.log(array);

array = array.concat(splice, slice);
console.log(array);