
/*

13  /_4____

13 - 4 = 9     1
9 - 4 = 5      1
5 - 4 = 1      1
1 - 4 = -3     0

*/

function divisionEntera(dividendo, divisor){
    if (dividendo < divisor){
        return 0;
    } else {
        return 1 + divisionEntera(dividendo - divisor, divisor)
    }
}

function multiplicacion(factor1, factor2){
    if (factor1 === 0 || factor2 === 0) {
      return 0;
    }
    return factor1 + multiplicacion(factor1, factor2 - 1);
}
  
function sumatoria(num){
    if (num === 0) return 0;
    return num + sumatoria(num - 1);
}
  
function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num - 1);
}