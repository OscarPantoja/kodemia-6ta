// console.log('hello koders')

// var persons = [
//     {
//         'firstName' : 'Oscar',
//         'lastName' : 'Pantoja',
//         'secLastName' : 'Hernandez',
//         'birthdate' : [
//             {
//                 'year' : 1989,
//                 'month' : '01',
//                 'day' : '02'
//             }
//         ]
//     }
// ]

// console.log(rfc(persons))

// function rfc (persons){
//     var x= persons[0]
//     return x.lastName[0]+x.lastName[1]
// }

// var numberOne = 12
// var numberTwo = 10
// var arr = []

// const arrayOfMultiples = (a,b) => {
//     let arr = []
//     for (let i = 1; i <= b; i++) {
//         var mult = i * a
//         arr.push(mult);
//     }
//     return arr; 
// } 

// for (var i = 1; i <= numberTwo; i++){
//     var mult = i * numberOne
//     arr.push(mult);
//     console.log(mult)
// }




// console.log(arr)

var array = ['a','b','c','d','e']

var liNodes = document.getElementsByTagName('li')

// liNodes[0].innerText = array[0]
// liNodes[1].innerText = array[1]
// liNodes[2].innerText = array[2]
// liNodes[3].innerText = array[3]
// liNodes[4].innerText = array[4]



array.forEach((e,i)=> liNodes[i].innerText = e)