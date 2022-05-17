// creare un'array di 5 numeri casuali
let numeroCasuale = [];
    
  
    setTimeout(createnumbarr, 5000);


    setTimeout(inpUTente,30000);
    
    










    function inpUTente() {
        for (let index = 0; index <= 5; index++) {
            let inpututente = parseInt(prompt('inserisci un numero'));
            console.log(inpututente);
         }
    }

    function createnumbarr() {
        for (let index = 0; index <= 5; index++) {
            let genNum = Math.floor(Math.random() * 5 + 1);   
            numeroCasuale.push(genNum);
        }
        console.log(numeroCasuale);
    }
    