//SEMANA 1
//--------------------------------------------------------------------------------------

//VARIABLES Y TIPOS DE DATOS
// const nombre = ("Juan Bolivar")
// let edad = 20
// let esEstudiante = true
// console.log(nombre)
// console.log(edad )
// console.log(esEstudiante)

//--------------------------------------------------------------------------------------

//OPERADORES ARITMETICOS
// const a = 15;
// const b = 4;
// let suma = a+b
// let resta = a-b
// let multi = a*b
// let div = a/b
// let residuo = a%b

// console.log("El resultado de la suma es: " + suma)
// console.log("El resultado de la resta es: " + resta)
// console.log("El resultado de la multiplicacion es: " + multi)
// console.log("El resultado de la division es: " + div + " El residuo es: " + residuo)

//--------------------------------------------------------------------------------------

//OPERADORES DE COMPARACION Y LOGICOS
// const nota1 = 80;
// const nota2 = 60;

// if (nota1 > nota2) {
//   console.log(" La nota 1 es mayor que la nota 2 ")
// }
// if (nota1 >= 70 && nota2 >= 70){
//   console.log(" Las 2 notas son mayores o iguales a 70")
// }
// if((nota1 > 75) || (nota2 > 75)) {
//   console.log(" Alguna de las 2 notas son mayores a 75")
// }

//--------------------------------------------------------------------------------------

//CONDICIONALES: IF/ELSE
// let edad = prompt(" ¿Que edad tienes?: ");
// numberEdad = Number(edad)
// function validarAcceso(numberEdad) {
//   // Tu código aquí
//   if (numberEdad >= 18){
//    return("Acceso Permitido")
//   }else{
//    return("Acceso Denegado")
    
//   }
// } 
// validarAcceso(numberEdad)

//--------------------------------------------------------------------------------------

//CONDICIONALES: SWITCH

// let numero = prompt("Ingrese un numero (dentro del 1-7): ")

// function obtenerDia(numero) {
//   // Tu código aquí
//   let dia = Number(numero)
//   switch(dia){
//     case 1:
//       return("Lunes")
      
//     case 2:
//       return("Martes")
      
//     case 3:
//       return("Miercoles")
      
//     case 4:
//       return("Jueves")
      
//     case 5:
//       return("Viernes")
      
//     case 6:
//       return("Sabado")  
      
//     case 7:
//       return("Domingo")    
      
//     default:
//       return("Dia invalido")  
      
//   }

// }

// console.log(obtenerDia(numero))

//--------------------------------------------------------------------------------------

//REASIGNACION Y OPERADORES
// let puntos = 10;
// puntos +=  5
// puntos *= 2
// console.log(puntos)

//--------------------------------------------------------------------------------------

//MANIPULACION DE TEXTOS (STRINGS)
// let mensaje = "Hola Mundo"
// console.log(mensaje.length)
// console.log(mensaje.toUpperCase())

//--------------------------------------------------------------------------------------

//CONVERSION DE TIPOS
// const precio1 = "45";
// const precio2 = "55";
// let numero1 = Number(precio1)
// let numero2 = Number(precio2)
// let resultado = numero1+numero2
// console.log(resultado)

//----------------------------------------------------------------------------------------

//MULTIPLES CONDICIONALES (ELSE IF)
// let nota = prompt("Ingrese su nota")
// let calificacion = Number(nota)
// function clasificarNota(calificacion) {
//   if (calificacion >= 90){
//       return("Excelente")
//   }else if(calificacion>=70){
//     return("Aprobado")
//   }else{
//     return("Reprobado")
//   }
  
// }
// console.log(clasificarNota(calificacion))

//----------------------------------------------------------------------------------------

//PAR O IMPAR
// let dato = prompt("Ingrese un numero")
// let numero = Number(dato)
// function esPar(numero) {
//   if (numero % 2 === 0)
//     return(true)
//   else{
//     return(false)
//   }
// }
// console.log(esPar(numero))


