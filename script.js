// ========================= Leap year =================================
function checkLeapYear(){
    let y = document.getElementById('year').value
    let result = isLeapYear(y)
    document.getElementById("leapyearResult").innerHTML = result;
 }

 function isLeapYear(y){
     var msg
     if((y%4===0 && y%100 !=0) || y%400===0){
         msg ="Yes!! "+ y + " is Leap Year"    
     }else{
         msg ="!!Ops "+ y + " is not Leap Year"
     }
     return msg
 }

 // ======================== Factorial =============================
 function checkFactorial(){
    let n = document.getElementById('factorial').value
    let result = calculateFactorilRecarsive(n)
    document.getElementById("factorialResult").innerHTML = result;
 }

 function calculateFactorilRecarsive(n){
     if(n==0){
        return 1    
     }else{
         return n * calculateFactorilRecarsive(n-1)
     }
 }

 function calculateFactorilLoop(n){
     var result=1
     for (let i = 1; i <= n; i++) {
         result = result * i
     }
     return result
 }


 // ======================= Fibonacci =================================
 function checkFibonacci(){
    let n = document.getElementById('fibonacci').value
    let result = createFibonacciRecarsive(n)
    document.getElementById("fibonacciResult").innerHTML = result;
 }

 function createFibonacciRecarsive(n){
     if(n==0){
        return [0]    
     }else if(n==1){
         return [0, 1] 
     }else{
         let data = createFibonacciRecarsive(n-1)
         let newElement =  data[n-1] + data[n-2]
         data.push(newElement)
         return data
     }
 }

 function createFibonacciLoop(n){
     var data=[0,1]
     for (let i = 2; i <= n; i++) {
         newElement = data[i-1]+data[i-2]
         data.push(newElement)
     }
     return data
 }

 // ======================= Prime Number =================================
 function checkPrime(){
    let n = document.getElementById('pNumber').value
    let result = createFibonacciLoop(n)
    document.getElementById("primeResult").innerHTML = result;
 }

 function checkPrimeRecarsive(n){
     if(n==0){
        return 0  
     }else if(n==1){
         return 1
     }else{
         if(){
             return msg
         }
     }
 }

 function createFibonacciLoop(n){
     let msg
     for (let i = 2; i < n; i++) {
         if(n%i==0){
             msg="!!Ops "+n+" is not a prime number"
             break
         }else{
             msg="Yes!! "+n+" is a prime number"
         }
     }
     return msg
 }