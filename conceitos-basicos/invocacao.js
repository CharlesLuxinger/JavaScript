function sayHello(name) {
    console.log("Hello " + name);    
}


//Tradicional
sayHello('Charles');

//Call
sayHello.call({}, 'Charles');

//Apply
sayHello.apply({}, ['Charles'])