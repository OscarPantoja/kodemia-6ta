console.log('hello koders')


for (var number = 0; number <= 100; number++){
    if (number%2===0){
 
        console.log(`El número ${number} es par`)

    }
}


var x = [['David','Morachel'],['Jorge', 'Camarillo']]

for (var index = 0; index < x.length; index++){
    var firstName = x[index][0]
    var lastName = x[index][1]
    var fullName = `${firstName} ${lastName}`
    console.log(fullName)
}

var wordArray = ['p','e','r','r','o']

function joinWord(wordArray) {
    
    var i 
    var finalWord = ''

    for (i = 0; i < wordArray.length; i++){
        var letter = wordArray[i]
        finalWord += letter
        
    }
    return finalWord
}  