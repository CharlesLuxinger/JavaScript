var escopoGlobal; // Evitar variáveis globais

(function(){
    //Priorizar em declar as variaveis primeiro(Hoisting)
    var escopoLocal,
        escopoGlobal,
        foo,
        obj,
        array;
  
    //Sempre utilizar "" para string, pois alguns compiladores não aceitam '' para string
    escopoLocal = "foo";
    escopoLocal.split("");
    console.log(escopoLocal);
  
    obj = {
      foo: "bar",
      bar: "foo",
      foobar: "oi"
    };
  
    array = [
      1,
      2,
      3
    ];
  
})();