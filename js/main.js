console.log('hello koders')

var word = 'perros'
var singular = word[0] + word[1] + word[2] + word[3] + word[4]

console.log(singular)

var number = -20

if (number >= 0 && number <= 100 && number % 10 === 0 ) {
	console.log('Esta entre el rango de 10 y 100')
} else if (number % 10 === 0) {
	console.warn('Solo es multiplo de 10')
} else if (number >= 0 && number % 10 !== 0) {
	console.warn('Es positivo, no multiplo de 10')
} else {
	console.error('No esta en el rango ni es multiplo perro')
} 

console.log(`El resultado de 1 + 10 es: ${1+10}`)

var str = "este metodo ha sido añadido"

console.log (str.endsWith ("añadido"))


/*determinar si la longitud de la palabra ingresada es un numero par*/

var word = "longitud"

if (word.length % 2 === 0) {
    if (word.length < 10) {
        console.log ('la longitud es numero par, mayor que cero y menor o igual a 10')            
    }  else if (word.length < 15) {
            console.log ('la longitud es mayor que 10 y menor a 15 y es un numero par')
        }
    }