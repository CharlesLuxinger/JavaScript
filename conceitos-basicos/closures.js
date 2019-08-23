var tick =  (function() {
    var cont = 0;

    return function(){console.log(cont++);}
})();

tick();
tick();
tick();

//Através dos closures somente a própria função é capaz de alterar às variáveis locais.