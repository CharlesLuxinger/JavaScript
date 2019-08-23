/* Functions  
    //Hoisting (Envia todas as declarações de funções para o topo do script) */
function sayHello(name) {
    console.log("Hello " + name);    
}

sayHello('Charles');

/* Anonymous Functions */
var sayHello2 = function(name){
    console.log("Hello " + name); 
}

sayHello2('Manuel');

/* Function Constructors */
var sayGoodbye = new Function("name", "console.log('Goodbye ' + name);");

sayGoodbye("Manuel");