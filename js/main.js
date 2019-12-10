console.log('hello koders')

    var numbers = [[1,2,3],[1,2,2],[3,6,7],[3,4,5,6]]   

    numbers.map(function(array){
        let total = 0
        console.log(array)
        array.forEach(function(number){
            total+= number
            console.log(number)
        })
        return total
    })

    var numbers = [[1,2,3,0],[10,0,3,4],[1,2,0],[4,3,2,1]]

    numbers.reduce(function(a,b,c,d){
        console.log(a,b,c,d)
        return a+b
    })




    var numbers = [1,2,3,4,5,6,7]

    numbers.map(function (number){
        return number **2
    })



var numbers = [3,5,7,45,32,11,22,34,56]

numbers.filter(function(number){
    return number % 2 === 0
})


var words = ['ana','juan','pedro','Agua','Reto']

words.filter(function(word){
    return word [0] === "a" || word === "A"
})




