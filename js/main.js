console.log('hello koders')

const PI = 3.1415
function circleArea(radius) {
    return PI * (radius ** 2)    
}
circleArea(10)
var circleArea = function(radius) {
    return PI * (radius ** 2)    
}
circleArea(10)
const circleArea = radius => PI * (radius ** 2)


["David", "23", "perro"].join('|')
"David|23|perro"
"David|23|perro".split('|')
(3) ["David", "23", "perro"]


// 'hOlA A todOs' => 'Hola A Todos'
function capitalizer(phrase) {
    var stringToArray = phrase.toLowerCase().split(' ')
    var arrayCapitalize = []
    for (var index = 0; index < stringToArray.length; index++) {
        var word = stringToArray[index]
        var wordCapitalize = `${word[0].toUpperCase()}${word.slice(1)}`
        arrayCapitalize[index] = wordCapitalize
    }
    var arrayToString = arrayCapitalize.join(' ') 
    return arrayToString
}