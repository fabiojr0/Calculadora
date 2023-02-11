function insert(num) {
    var numero = document.querySelector('div.visor').innerHTML;
    document.querySelector('div.visor').innerHTML = numero + num;
}

function clean() {
    document.querySelector('div.visor').innerHTML = "";
}

function back() {
    var visor = document.querySelector('div.visor').innerHTML;
    document.querySelector('div.visor').innerHTML = visor.substring(0, visor.length -1);
}

function calcular() {
    var visor = document.querySelector('div.visor').innerHTML;
    if(visor)
    {
        document.querySelector('div.visor').innerHTML = eval(visor);
    }
    else
    {
        document.querySelector('div.visor').innerHTML = "..."
    }
}

function isNum(val){
  return !isNaN(val)
}

document.querySelector("body").addEventListener( "keydown", function(evt) {
    
    console.log(evt)
    var str = evt.key;
    if(str === 'Backspace') {
      back()
    }
    else if( str === '*' || str === '/' || str === '+' || str === '-' || str === '.'){
      insert(str)
    }
    else if(str === '='){
      calcular()
    }
    else if(isNum(str)){
      insert(str)
    }
 
});


