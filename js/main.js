console.log('hello koders')



var word = 'perro'
var vowels = 'aeiou'
​
var count = 0 
var vowelsAmount = 0 
while (count < word.length) {
    let letter = word[count]
    if (vowels.includes(letter)) {
        vowelsAmount++
    }
    count++
}
​
if (vowelsAmount >= 3) {
    console.log(`En efecto brou tiene ${vowelsAmount} vocales`);
} else {
    console.warn('Te falta brou');
}




