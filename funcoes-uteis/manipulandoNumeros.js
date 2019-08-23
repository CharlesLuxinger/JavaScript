var x = 4.56e7; // 45600000 
var y = 123e-6; // 0.000123

var z = 999999999999999; // JS suporta apenas 15 dígitos(inteiros) e 16 dígitos(decimais), 
                            //depois ele arredonda para o maior numero que suporta

var a = 0xFFF; //Hex 4095

var b = 07777; //Octal 4095

console.log(b.toString(16)); //Retorna na anotação escolhida -- Hex
console.log(b.toString(2)); //Retorna na base escolhida -- Binária

console.log(x.toExponential()); //Retorna na anotação escolhida -- Expo

console.log((3.357).toFixed(2)); // Especifica qtd de casas arredonda 5+

console.log((3.357).toPrecision(2)); // Especifica qtd de numeros