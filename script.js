const name = 'klausqama'
console.log(name)
//Scrivi un programma che stampi i numeri da 1 a 100,ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//numeri da 1 a 100
//for(let i = 0; i <=100; i++){
//console.log(i);}
//fizz al posto dei numeri multipli di 3 e buzz a quelli di 5
for(let i = 0; i <=100; i++){
   const num = i+1
   let message = ''+num
   const mul3 = num % 3 ===0
   const mul5 = num % 5 ===0
   if (mul3 && mul5){
    message= "FIZZBUZZ"
   } else if (mul5){
    message= "BUZZ"
   } else if (mul3){
    message="FIZZ"
   } 
   console.log(message)
 }
    
    
