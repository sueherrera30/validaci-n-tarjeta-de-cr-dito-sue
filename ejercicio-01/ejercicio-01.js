function isValidCard(creditCardNumber){

if(typeof creditCardNumber === "undefined"){
  return "Ingresa un numero";
}
  var pares = [];
  var impares = [];
  var imparesSumados =[];
  var numeros = creditCardNumber.toString();
  var arreglo = numeros.split("").map(Number);

  if(typeof creditCardNumber!="number"){
    return "Error de dato";
   }
   if(numeros.length != 16){
     return "Faltan numeros";
   }
   if(numeros === ""){
     return "Ingresa un numero"
   }  

  arreglo.map(function(num,i){
          if(i%2 === 0){
          return pares.push(num);
          }
          else{
            return impares.push(num);
          }});


      paresSumados = pares.map(function(num){
       var numeroMultiplicado = num * 2;
         if(numeroMultiplicado > 9){
          return numeroMultiplicado - 9;// para hacer la cifra en una sola
         }
        else{
          return numeroMultiplicado;
        }});

        var paresFinales = paresSumados.reduce(function(a,b){
          return a + b});

       var imparesFinales = impares.reduce(function(a,b){
            return a + b});

       var sumaTotal = paresFinales + imparesFinales;
       console.log(sumaTotal);
       if(sumaTotal%10 == 0){
         return true;
       }
       else{
         return false;
       }
       console.log(sumaTotal)
 }

isValidCard(5522105861876196);


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
