// create an array of words 

var dom = document.getElementById("underscores");
var cars =["honda", "ford", "chevy", "kia" ];
var underscores = [];
var guessesLeft = 6;
let rightWord =[];
let wrongWord = [];

//choose word randomly

function gameStart () {
        
     underscores = [];

    var ranNum = Math.floor(Math.random() * cars.length); 

    console.log ("RanNum: " + ranNum); 
    var randomlyChosenCar = cars[ranNum];
     rightWord =[];
     wrongWord = [];
    console.log("Chosen word: " + randomlyChosenCar);  

    //create underscores based on word

    for (var i =0 ; i <randomlyChosenCar.length; i++) { 
        underscores[i] = " _ ";
    
    } 
    var t = underscores.join(" ");
    dom.append(t);
    console.log (t); 
    
    
    document.addEventListener('keypress', (event) => { 
        // console.log('event: ', event);
        let letter = String.fromCharCode(event.keyCode); 
        console.log(letter);
        // console.log('randomlyChosenCar: ',randomlyChosenCar);
        
        if (guessesLeft > 0) {
            if(randomlyChosenCar.indexOf(letter) > -1 ){
                var index = randomlyChosenCar.indexOf(letter);
                console.log('its a match');
                console.log('index: ', index);
                underscores[index] = letter;
                console.log('underscores: ', underscores);
                var updatedWord = underscores.join('');
                console.log('updatedWord: ', updatedWord);
                dom.innerText = updatedWord;

                guessesLeft--;
            }
        } else { 
             
           
        } 
        
    });
}; 
gameStart();

