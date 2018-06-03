/*Variable/function-Hoisting Variable hoisting:*/

x = 5; // Assign 5 to x
console.log(x);
var x = 1;  // Declare x
/*Eksemplet her vil virke fordi at et assignment i javascript undersøger variabler nedenfor i koden,
 og så hejser den variablen op til toppen, sådan at den nye assignment kommer til at virke.*/

function sup(){ return yo();}
console.log(sup());
function yo(){ return 10;}

/*Eksemplet her vil så også virke fordi igen undersøges der nedenfor om noget funktion kaldet for yo eksisterer,
 og så hejser den funktionen op til toppen, sådan at funktion sup kan returnere 10 fra yo funktionen.*/


var objectIs = {
    test: 5,
    findTest: function(){
        return this.test;
    }
}
console.log(objectIs.findTest());

/* I javascript refererer this altid til en 'ejer' af metoden der bliver eksekveret, rettere sagt det object functionen er metode af.
I java refererer this til det nuværende øjeblik af metoden
*/

let a = 3;
(function(){
this.a = 11;
})();
console.log(a);
/*I javascript har this et globalt omfangt så når man ikke er på den globale omgang men i en funktion vil this ikke virke. eksempel ovenover. (a vil stadig være 5) */

/*men i java/.net har this et omfang for metoder og variabler der ikke er statiske. eksmpel (b skulle gerne være 10):
package thisdemo;
 static int a = 5;
 int b = this.a + 5;
 public static void main(String[] args) {
     ThisDemo td = new ThisDemo();
      System.out.println(td.b);}
   public int b() {return this.b;}}*/


/*   arrow funktioner løser alle problemer med this hvis feks et object med en konstructor fra en klasse bliver sendt ned i en funktion giver undefined 
(fordi assigment ikke er globalt), hvilket før var et problem i javascript fordi det hørte dårligt sammen med OO programmering som i java,
 men en midlertidlig løsning dengang var at sige const self = this (dette er en bid kode fra en af timerne).*/


   class Person{
    constructor(fName,lName){
        this.fName = fName;
    }
    sayHelloArrowFix(){
        setTimeout(() =>{ //fix!
            console.log(`Hi ${this.fName}`);
        },);    
    }
    sayHelloFixSelf(){
        const self = this; //fix!
        setTimeout(function(){
            console.log(`Hi ${self.fName}`);
        },);    
    }
    }
    let p = new Person("Hallur", "vid Neyst");
    p.sayHelloFixSelf();
    p.sayHelloArrowFix();

 /*   Function Closures and the JavaScript Module Pattern

1. Function closure generelt er udtryk for ting man kan gøre indenfor funktionens eget scope.
2. Én funktion i javascript har mulighed for at gøre brug af både det lokale og globale omfang af variabler (kode nedenfor viser at funktionen tager imod en variabel fra det globale scope.
*/
    var a = 4; //variabel i det globale omfang
(function myFunction() {
   var b = 5; //b er i det lokale omfang
 console.log(a * a); //giver 16, gør brug af a fra det globale omfang
}()); //self-call

/* 
Javascript module pattern er almindeligt javascript-kode-mønster. Koden ovenover gør faktiskt brug af den fondumentale konstruktur hvori paranteserne rundt om funktionen
 gør sådan at funktionen går fra at være en deklaration til ét funktions udtryk i stedet, der eksekverer sig selv.
*/

/* én javascript funktion der eksekveres så snart den er defineret.
der er paranteser rundt om funktionen for at forhindre adgang til variabler indeni IIFE functionen (så hello variablen har ingen adgang ude i det globale scope).
 De 2 sidste paranteser er skyld i eksekveringen ligesom når man normalt kører en funktion.
*/

/*
Prototyper i javascript har at gøre med feks map, filter reduce osv. Disse 3 er Array Prototyper som også er standard javacript obects, og én array prototype er en predefineret function der tager et callback og gør noget med callback-regelen brugeren har defineret.
For at lave din egen array prototype constructor kan du gøre det på den her måde:
*/

Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
       this[i] = this[i].toUpperCase();
   }
  };
  var a = ["a","b"]
  a.myUcase();
  console.log(a);

  /*
  den her prototype tager this[i] (det originale string-array's index) og laver indexet til et stort bogstav. Ét andet prototype eksempel er ligesom i object orienteret programmering hvori feks én
   person klasse har en konstruktor, så kan javascript gøre det med én function (med stort bogstav til at starte fordi det er ét object konstructor). Eksempel nedenfor:
  */

 function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  var me = new Person("Hallur", "við Neyst");
  console.log(me);

  //En callback funktion er en funktion der sættes ind i parametret af én anden funktion, der så bruges i det lokale scope for den funktion.

  function takeName(fName, lName, callback) {
    callback(fName, lName);
   }
   function alertName(fName, lName){ alert(fName + " " + lName);}
   takeName('hallur', 'vid neyst', alertName);

/*
reduce laver én string eller et tal ud fra et array, med den regel at bruger-callback metoden gør noget ved 
de forrige elementer og det nuværende element (plusser de forrige med det nuværende i eksemplet). Nedenstående eksempel vil give 125.

*/
var array = [65, 44, 12, 4];
const reduce = numbers.reduce((total, num) => total+num);

   //Provide examples of user defined reusable modules implemented in Node.js

  /* modules i node js er ligesom libraries i javascript, det er nogle funktionaliter du kan gøre brug af i din applikation. For at du som bruger skal kunne 
   lave et reusable module kan du gøre brug af exports for at gøre dine properties og metoder synlige udenfor modul filen. Eksempel nedenfor:*/
   exports.sayHello = function () {
    return "hello";
  };

 /* eksempel hvor http bruges for at sende 'hello' til en side: , den kan ses på localhost:8080 */
 var http = require('http');
var dt = require('./helloModule'); //vi leger at sayHello metoden ligger i en fil der hedder helloModule.js

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("from function: " + dt.sayHello());
 res.end();
}).listen(8080);

/* Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc. let */
let x = 1;
if (x === 1) {
 let x = 2; // x findes ikke i det lokale scope så vi kan lave en ny lokal x variabel
console.log(x); //giver 2
}
console.log(x); //giver 1 fordi let sætter variablen til kun at kunne ændre sig i det lokale scope.

//arrow
function sayHello1(){
    return "hello";
  } //gode gammeldags funktion
  sayHello2=()=>"hello"; /*fylder mindre, og gør det samme, med arrow funktion behøves der ikke skrives function, og hvis det er samme 
     linje behøver vi heller ikke curley brackes og return.*/

//rest parameters (HAR INTET AT GØRE MED REST ENDPOINTS! rest i det her tilfælde = 'the rest of the values...')
function mapThis(...theArgs) { //dette er et rest parameter, det tager et ubestemt antal numre, i dette tilfælde så mange numre man     har lyst til.
    return theArgs.map((num) => {
      return num*2;
    });
   }
   function mapThis2(...[a,b,c]){ //dette er et rest parameter med op til 3 numre...
      return [a,b,c].map((num=>{
             return num*2;
        }));
   }
   console.log(mapThis(1, 2, 3,4,5)); //giver [2,4,6,8,10]
   console.log(mapThis2(1,2,3,4,5)); //giver [2,4,6]


//de-structuring assignments
var strings = ['one', 'two', 'three', "try and remove this"];
var [one, ...rest] = strings;
[one] = ["one has been changed"];
[...rest] = ["two changed", "three changed"];
strings = [one, ...rest];
console.log(strings);
/*som ses på koden bygger vi om på arrayet, vi definerer one som det første element,
og ...rest definerer erstatning af hvad der var i forvejen af resten af stringsene*/

//maps/sets
const set = new Set([1,1, "hey", true]);
console.log(set); /* giver Set{1,hey,true}. Grunden til den ignorerer det andet et tal
er fordi i set skal ingen værdier gentage sig.
*/
const map = new Map([[1,'hey'],[2,'yo']]);
console.log(map.get(1)); /*
lidt ligesom hashmap holder map en nøgle og en tilhørende værdi til den nøgle
for hvert element, resultatet skulle gerne give -> hey.
*/

//Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

//export = opretter js modul til at exportere funktioner eller andet fra modulet så det kan blive brugt af andre applikationer der kan importere det.
//import = importerer modulet til din applikation.
//------ myFunc.js ------
export default function hey() {  return "hey"};

//------ main1.js ------
import myFunc from 'myFunc'; //export default gør at vi selv kan navngive det vi importerer
myFunc(); /* i node js skriver man exports.function = function(){} i én fil og require'module' i den anden. */

//Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

class Vehicle {
    constructor (name, type) {
     this.name = name;
     this.type = type;
     }
     getName () {
     return this.name;
    }
    getType () {
     return this.type;
    }
    }
    class Car extends Vehicle {
     constructor (name) {
     super(name, 'car');
    }
    getName () {
      return 'It is a car: ' + super.getName();
     }
    } let car = new Car('Toyota'); /*konstructoren i Car gør brug af super som sætter navn og biltype på superklasse konstrukteren  (Vehicle)
    */
    console.log(car.getName());  //henter getName fra superklassen GetVehicle
    /* det ligner rigtig meget inheritance i java, forskellen er dog at super bliver ikke brugt lige meget i java når der er tale om        inheritance, fordi at  værdierne vil være default i java, og ikke i javsacript?, 
    konstrukteren i dette tilfælde behøver heller ikke     have samme navn som klassen i javascript, andet end det kan jeg ikke se den store forskel. */