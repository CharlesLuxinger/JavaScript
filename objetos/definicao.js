var obj = 
    { nome: "Manuel", 
      sobrenome: "da Silva", 
      idade: 16,
      apresentar: function(){
          console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome);
      },
      apresentar2: apresentar2
    };

console.log(obj);

console.log(obj.nome);

obj.apresentar();

obj.apresentar2();

function apresentar2() {
    console.log("Olá, eu tenho " + this.idade);
}
