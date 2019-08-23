function Stark(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    
    this.sobrenome = 'Stark';

    this.apresentar = function(){
        console.log("Olá meu nome é " + this.nome);
    }
}

var fred = new Stark("Fred", 40, "M");
fred.sayGoodBye = function() { console.log("Goodbye!"); };

var carla = new Stark("Carla", 22, "F");

console.log(fred);
console.log(carla);

fred.apresentar();
carla.apresentar();

fred.sayGoodBye();
//carla.sayGoodBye(); 

Stark.prototype.sayGoodBye = function() { console.log("Goodbye!"); };
carla.sayGoodBye(); 