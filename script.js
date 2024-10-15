const name = 'klausqama'
console.log(name)
//Scrivi un programma che stampi i numeri da 1 a 100,ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//numeri da 1 a 100
//for(let i = 0; i <=100; i++){
//console.log(i);}
//fizz al posto dei numeri multipli di 3 e buzz a quelli di 5
for(let i = 0; i <=100; i++){
    if(i % 3 === 0){
        console.log("fizz");
    }
    if(i % 5 === 0){
        console.log("buzz")
    } 
    else{
        console.log(i);
    }
    }
    
