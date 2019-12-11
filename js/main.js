console.log('hello koders')


var words = ['ana','juan','pedro','Agua','Reto','uno','Erik']

var vowels = 'aA'

const filterWordsA = (word) => words.filter(word => vowels.includes(word[0])) 
console.log(filterWordsA(words))


var vowels = 'aeiouAEIOU'

const filterWords = (word) => words.filter(word => vowels.includes(word[0])) 
console.log(filterWords(words))





var wordsB = ['ana','juan','pedro','Agua','Reto']

const initialLetter = words => words.reduce ((a,b) => a + b[0] , '')
console.log(initialLetter(words))
